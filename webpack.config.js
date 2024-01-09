/* eslint-disable */
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin  = require('copy-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
  entry: { script: path.resolve(__dirname, './src/') },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: production ? '[name].[contenthash].js' : '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
        ],
      },
      {
        test: /\.m?ts$|\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.*', '.js', '.jsx', '.tsx', '.ts', '.css'],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: 'public' },
      ],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'PresentationMaker',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: production ? '[name].[contenthash].css' : '[name].css',
    }),
  ],
  mode: production ? 'production' : 'development',
}
