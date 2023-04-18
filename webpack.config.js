const path = require("path");
const webpack = require("webpack");
const htmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development',
    entry: './views/js/script.js',
    output: {
        path: path.join(__dirname,'views'),
        filename: 'bundie.js'
    },

    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }

        ]
    },
    plugins:[
        new htmlwebpackPlugin({
            template:'./views/index.html'
        })
    ]
}

