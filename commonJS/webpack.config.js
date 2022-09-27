const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/domHandler.js"),
  output: {
    path: path.resolve(__dirname, "build"), // destination
    filename: "bundle.js", // nom du bundle final
    clean: true, // le répertoire de destination est vidée à chaque fois
  },
  mode: "development",
  plugins: [
    // Permet de copier un fichier HTML dans le build
    new HTMLWebpackPlugin({
      title: "CommonJS Modules et Webpack",
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html"), // copie notre fichier index.html, sinon crée un nouveau
    }),
  ],
  devServer: { // serveur de dev de WebPack, fait le bundling à chaque fois
    static: "./build",
  },
};
