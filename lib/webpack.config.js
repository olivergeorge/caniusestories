module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  externals: {
    'react': 'commonjs react',
    'react-dom' : 'commonjs react-dom'
  }
};
