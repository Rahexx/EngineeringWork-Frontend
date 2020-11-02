module.exports = {
  entry: {
    main: './src/index.js',
    logIn: './src/app/logIn.js',
    signUp: './src/app/signUp.js',
    admin: './src/app/admin.js',
    rooms: './src/app/rooms.js',
    favourite: './src/app/favourite.js',
    users: './src/app/searchUsers.js',
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
