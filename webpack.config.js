const path = require('path');
const webpackConfig = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.ts'],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
};
