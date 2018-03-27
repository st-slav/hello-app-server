var path = require('path');
var webpack = require('webpack');
//var UglifyJSPlugin = require('uglifyjs-webpack-plugin'); // плагин минимизации

module.exports = {
    entry: {
//        'polyfills': './src/main/ts/polyfills.ts',
//        'app': './src/main/ts/main.ts',
    	vendor: ['./src/main/ts/polyfills.ts', './src/main/ts/main.ts']
    },
    output:{
        path: path.resolve(__dirname, './src/main/webapp'),
        publicPath: '/', //урл для папки выше
        filename: '[name].js'
    },
    devServer: {
  	  	contentBase: path.join(__dirname, "./src/main/webapp"),
  	  	compress: true,
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules:[ //загрузчик для ts
            {
                test: /\.ts$/, // определяем тип файлов
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
                    },
                   'angular2-template-loader'
               ]               
            }, {
            	test: /\.css$/,
	            loader: 'raw-loader',
	            include: path.resolve(__dirname, './src/main/ts/app')
            },
        ]
    },
    performance: { hints: false },
    optimization: {
        splitChunks: {
//            chunks: 'all',
            cacheGroups: {
                vendor: {
                  chunks: "all",
                  test: "vendor",
                  name: "vendor",
                  enforce: true
                }
              }
        },
    	minimize: true,
    },
    plugins: [
        // позволяет управлять путями к файлам вне зависимости используем мы Windows или Linux
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname, './src/main/ts'), // каталог с исходными файлами
            {} // карта маршрутов
        ),
        // позволяет оптимизировать код сборок. Например, сборки импортирут одни и те же пакеты, то плагин позволяет избежать дублирования этих пакетов в сборках
//        new CommonsChunkPlugin({
//            name: ['app', 'polyfills']
//        }),
        // минифицирует код сборок
//        new UglifyJSPlugin() 
  ],
}