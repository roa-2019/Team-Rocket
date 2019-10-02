const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, '../server/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    }
]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css'
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map'
}
