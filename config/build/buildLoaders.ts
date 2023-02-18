import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        compilerOptions: {
          noEmit: false,
        },
      },
    },
    exclude: /node_modules|\.d\.ts$/,
  };

  const sassLoader = buildCssLoader(isDev);

  const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/i,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
