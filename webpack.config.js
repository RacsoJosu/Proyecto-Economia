const path = require("path");
const webpack = require("webpack");
const htmlwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:'development',
    entry: './views/js/index.js',
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
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

