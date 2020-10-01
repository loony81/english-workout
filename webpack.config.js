const currentTask = process.env.npm_lifecycle_event
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const fse = require('fs-extra')

//our own plugin for copying the images folder into dist
class RunAfterCompile {
	apply(compiler){
		compiler.hooks.done.tap('Copy images', () => {
			fse.copySync('./app/assets/images', './dist/assets/images')
		})
	}
}

const cssConfig = {
	// shared setting for processing css
	test: /\.css$/i,
	// css-loader allows to import css files into javascript like a module
	use: ['css-loader?url=false']
}

const config = {
	//here go shared settings for development and production

	//watch, process and bundle this js file which acts as an entry point for entire app
	entry: './app/assets/scripts/app.js',
	plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
	module: {
		rules: [
			cssConfig
		]
	}
}

// here go webpack configuration settings for development
if(currentTask == 'dev'){
	// style-loader will actually injects css styles into the DOM
	cssConfig.use.unshift('style-loader')
	config.output = {
		// for development save the resulting js file in memory
		filename: 'bundled.js',
		// in this location
		path: path.resolve(__dirname, 'app')
	}
	config.devServer = {
		// to reload the web browser automatically when we save a change
		 // to any html file anywhere within the app folder
		before(app,server){
			server._watch('./app/**/*.html')
		},
		// and serve up the app folder
		contentBase: path.join(__dirname, 'app'),
		// hot module replacement, whenever we save a change to css or js files, 
		// the code will be automatically injected into the browser's memory without a full reload
		hot: true, 
		port: 3000,
		// to view our development site on any device connected to the same lan
		// without this option it won't be possible
		host: '0.0.0.0'
	}
	config.mode = 'development'
}

// here go webpack configuration settings for production
if(currentTask == 'build'){
	// to make our production javascript backwards compatible (so that it works perfectly in older browsers)
	config.module.rules.push({
		test: /\.js$/,
		exclude: /(node_modules)/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
		}
	})
	cssConfig.use.unshift(MiniCssExtractPlugin.loader)
	config.output = {
		// save the resulting js file in this location,
		//the file will be named differently each time there's an update in the code
		//to make the browser redownload it and not use the cached version
		filename: '[name].[chunkhash].js', 
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	}
	config.mode = 'production'
	//split the resulting js into separate files (your own js and vendors)
	config.optimization = {
		splitChunks: {chunks: 'all'},
		minimizer: [
			//minimize the resulting css
			new CssMinimizerPlugin()
		]
	}
	config.plugins.push(
		// remove all the files inside the dist folder before generating a new build
		new CleanWebpackPlugin(), 
		// extract css from the bundled.js file into its own css file
		// vendors' css will also be saved into its own css file
		new MiniCssExtractPlugin({filename: 'styles.[chunkhash].css'}),
		// copy the images folder into the dist folder
		new RunAfterCompile()
	)
}

module.exports = config