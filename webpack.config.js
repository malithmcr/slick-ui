'use strict'
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const baseConfig = {
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
              // hmr: process.env.NODE_ENV === 'development'
            }
          },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('tailwindcss')('./tailwind.config.js'),
              ],
            },
          },
          { loader: 'less-loader'},


        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
          },
        ],
      },
      {
        test: /\.([ot]tf|woff(2)|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
            }
          }
        ]
      },
    ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: ["[name]"],
    libraryTarget: 'umd',
  },
  externals: [
    "react",
    "react-dom",
  ],
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
}

function createConfig(entry, name) {
  return {
    ...baseConfig,
    entry: {
      [name]: entry
    },
    output: {
      ...baseConfig.output,
      path: path.resolve(baseConfig.output.path, name),
    },
  }
}

// Entry list
const core = createConfig('./src/core/index.ts', 'core')
const custom1 = createConfig('./src/custom1/index.ts', 'custom1')

module.exports = (env, args) => {
  if (args.entryTarget === 'core') {
    return [
      core,
    ]
  } 
  return [
    core,
    custom1,
  ]
}