var path = require ("path");

module.exports = {
    context: path.resolve (__dirname, "src"),
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,   
        contentBase: path.resolve (__dirname, "src/public"),
        port: 80,
        host: "0.0.0.0"
    },
    resolve: {
        extensions: [".js"]
    },
    entry: {
        scripts: "./assets/js/app.js",
        styles: "./assets/scss/styles.scss",
    },
    output: {
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["es2015", { modules: false }]
                        ]
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
}