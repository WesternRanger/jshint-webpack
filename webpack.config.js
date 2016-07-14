/**
 * Created by WesternRanger on 16/7/13.
 */
module.exports = {
    entry: {
        index:'./js/src/index.js'
    },
    output: {
        filename: './js/dist/[name].js',
    },
    module: {
        preLoaders: [{
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel?presets[]=es2015'
        }]
    },
    //// more options in the optional jshint object
    jshint: {
        "esnext":true//jshint支持es6
    }
}