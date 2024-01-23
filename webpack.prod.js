const glob = require('glob');
const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FileManagerPlugin = require('filemanager-webpack-plugin');

// Site specific configuration.
const themePath = './src';
const cssPath = `${themePath}/css`;
const sassPath = `${themePath}/scss`;

const entries = {};
glob.sync(`${sassPath}/**/!(_)*.scss`).map(function(file) {
  const entryKey = path.basename(file, '.scss');
  entries[entryKey] = file;
});

const mode = 'production';

module.exports = {
  mode,
  entry: entries,

  output: {
    // Webpack will create js files even though they are not used.
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    // Where the CSS is saved to.
    path: path.join(__dirname, cssPath),
    publicPath: cssPath,
  },

  resolve: {
    extensions: ['.scss'],
    alias: {
      // Provides ability to include node_modules with ~.
      '~': path.resolve(process.cwd(), 'src'),
    },
  },

  plugins: [
    // Delete JS files created by Webpack.
    new FileManagerPlugin({
      events: {
        onEnd: {
          delete: ['./css/**/*.js'],
        },
      },
    }),

    // Define the filename pattern for CSS.
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Extract and save the final CSS.
          MiniCssExtractPlugin.loader,
          // Load the CSS, set url = false to prevent following urls to fonts and images.
          { loader: 'css-loader', options: { url: false, importLoaders: 1 } },

          // Add browser prefixes and minify CSS.
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [autoprefixer()] },
            },
          },
          // Load the Scss/Sass.
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
};
