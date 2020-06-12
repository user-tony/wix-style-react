# Usage Without Yoshi (BETA)

`wix-style-react` works best when [Yoshi](https://github.com/wix/yoshi) is used as build tool.
if you do not wish or cannot use it, you can use webpack. However, at the moment additional configuration is required.

Follow these steps in order to configure your own wix-style-react project:

1. Create a new project:
```bash
npx create-stylable-app my-wsr-app
cd my-wsr-app
```

2. Install wix-style-react version 8.18.0 EXACTLY!
```bash
npm install wix-style-react@8.18.0 --save --save-exact
```

3. Install necessary loaders:
```bash
npm install url-loader style-loader css-loader node-sass resolve-url-loader sass-loader --save-dev
```

4. Use loaders in `webpack.config.js` file:
```js
const path = require('path');
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'node_modules/wix-animations'),
                    path.join(__dirname, 'node_modules/wix-style-react'),
                    path.join(__dirname, 'node_modules/bootstrap-sass')
                ],
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            localsConvention: 'camelCase',
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json'],
    },
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
};
```

5. You're good to go, just run your app!
```bash
npm run start
```
