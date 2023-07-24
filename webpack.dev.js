const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './index.js', // Assuming your main entry file is named 'index.js'
  output: {
    path: path.resolve(__dirname, 'build'), // Output directory for the bundled files
    filename: 'index.js', // Output filename
  },
  externals: [nodeExternals()], // Exclude node_modules from bundling
  module: {
    rules: [
      {
        test: /\.js$/, // Apply the following loaders to .js files
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader to transpile ES6+ code
          options: {
            presets: ['@babel/preset-env'], // Use @babel/preset-env for ES6+ support
          },
        },
      },
    ],
  },
};
