const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const IS_LIVE = process.env.NODE_ENV === 'production';
const extractCSS = new ExtractTextPlugin('main.css');

const config = {
    entry: IS_LIVE ? {
        main: './client/main.jsx'
    } : {
        main: ['./client/main.jsx', 'webpack-hot-middleware/client?reload=true'],
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: IS_LIVE ? './server/static' : '/server/static',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.jsx?$/,
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (IS_LIVE) {
    config.plugins.push(extractCSS);
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
    config.module.loaders.push({
        exclude: /node_modules/,
        loader: extractCSS.extract(['css-loader', 'sass-loader']),
        test: /\.scss?$/
    });
    config.module.loaders.push({
        loader: extractCSS.extract(['css-loader']),
        test: /\.css?$/
    });
} else {
    config.module.loaders.push({
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss?$/
    }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    });
}

module.exports = config;
