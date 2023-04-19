module.exports = {
    entry: './index.js',
    output: { filename: 'bundle.js' },
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            { loader: "style-loader"}, // injects styles into the DOM
            { loader: "css-loader" },  // translates CSS into JS
            { loader: "sass-loader" }  // compile Sass to CSS
          ]
        }
      ]
    }
  };
  
  