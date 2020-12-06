import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const OUTPUT_PATH = path.resolve(__dirname, 'lib');
const PUBLIC_PATH = path.resolve(OUTPUT_PATH, 'public');

export default {
  name: 'client',
  mode: 'development',
  target: 'web',
  entry: {
    client: ['./src/client'],
  },
  output: {
    path: PUBLIC_PATH,
    libraryTarget: 'umd',
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'astroturf/loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
