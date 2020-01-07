var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: "/node_modules",
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: 'style-loader'
                  },
                  {
                    loader: 'css-loader'
                  }
                ]
              }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
        // favicon: 'public/favicon.ico' 파비콘은 준비가 되어있지 않아 주석처리한다.
    })],
    devServer: {
        historyApiFallback: true,
        open: true,
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    },
}