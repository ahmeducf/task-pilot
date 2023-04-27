const path = require('path');
const { merge } = require('webpack-merge');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        title: 'Restaurant Page',
        favicon: './src/assets/favicon.ico',
        template: './src/index.html',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              [
                'imagemin-gifsicle',
                { interlaced: true, quality: 20, progressive: true },
              ],
              ['imagemin-mozjpeg', { quality: 20, progressive: true }],
              ['imagemin-pngquant', { quality: [0, 0.1] }],
              ['imagemin-svgo', { plugins: [{ removeViewBox: false }] }],
            ],
          },
        },
        loader: false,
      }),
    ],
  },
});
