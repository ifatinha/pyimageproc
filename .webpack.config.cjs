/*
  Webpack Configuration File

  Descrição:
  Este arquivo configura o Webpack para bundling do projeto, tratando JavaScript, CSS, assets e otimizando a saída 
  para diferentes ambientes (desenvolvimento e produção).

  Variáveis:
  - isProd: booleano que indica se o ambiente é de produção (process.env.NODE_ENV === "production").

  Propriedades principais:

  1. mode:
     - Define o modo de operação do Webpack: "production" ou "development".

  2. entry:
     - Ponto de entrada do aplicativo: "./src/index.js".

  3. output:
     - path: diretório de saída dos arquivos gerados (dist/).
     - filename: nome do bundle JS (com contenthash em produção para cache busting).
     - publicPath: caminho público base para os assets.

  4. devtool:
     - Source maps para depuração.
     - Em produção: "source-map".
     - Em desenvolvimento: "eval-cheap-module-source-map" (mais rápido).

  5. devServer:
     - Configura o servidor de desenvolvimento.
     - static.directory: pasta servida pelo dev server.
     - port: porta do servidor (8080).
     - open: abre automaticamente no navegador.
     - hot: habilita Hot Module Replacement (HMR).

  6. module.rules:
     - Define loaders para diferentes tipos de arquivos.
     - JS: usa babel-loader para transpilar ES6+.
     - CSS: usa style-loader em desenvolvimento e MiniCssExtractPlugin.loader em produção, junto com css-loader.
     - Assets: imagens e fontes são tratados com asset/resource.

  7. plugins:
     - CleanWebpackPlugin: limpa a pasta dist antes de cada build.
     - HtmlWebpackPlugin: gera o HTML principal baseado no template src/index.html.
     - MiniCssExtractPlugin: extrai CSS em arquivos separados (apenas em produção).

  8. optimization:
     - splitChunks: habilita divisão de código em chunks separados para otimização.

  Observações:
  - Essa configuração permite builds rápidos em desenvolvimento com HMR e builds otimizados em produção.
  - Mantém compatibilidade com navegadores antigos através do Babel (configuração externa .babelrc).
*/

// Módulo nativo do Node.js para lidar com caminhos de arquivos.
const path = require("path");

// Gera automáticamente uma arquivo HTML que inclui bundles gerados.
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Limpa a pasta de saída (dist) antes de cada build
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Extrai CSS em arquivos separados em builds de produção
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { OptimizationStages } = require("webpack");

// Detectando ambiente de produção
const isProd = process.env.NODE_ENV === "production";

// Configuração principal do Webpack
module.exports = {
  mode: isProd ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProd ? "bundle.[contenthash].js" : "bundle.js",
    publicPath: "",
  },

  devtool: isProd ? "source-map" : "eval-cheap-module-source-map",

  devServer: {
    // Pasta servida pelo servidor (dist/)
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 8080,
    open: true,
    //Atualiza módulos sem recarregar a página inteira.
    hot: true,
  },

  module: {
    rules: [
      // JS -> babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      // CSS
      {
        test: /\.css$/i,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
        ],
      },

      // Assets (imagens / fonts)
      {
        test: /\.(png|jpg|jpeg|webp|svg|gif|woff2?|eot|ttf)$/,
        type: "assets/resource",
      },
    ],
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: false,
      inject: "body",
    }),
    ...(isProd
      ? [new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" })]
      : []),
  ],

  // Otimizações
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
