const webpack = require('webpack');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {

        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader'
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }

}