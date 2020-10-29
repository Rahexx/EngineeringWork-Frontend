module.exports = {
  entry: {
    main: './src/index.js',
    logIn: './src/logIn.js',
    signUp: './src/signUp.js',
    admin: './src/admin.js',
    rooms: './src/rooms.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
};
