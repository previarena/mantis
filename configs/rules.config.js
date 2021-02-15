const autoprefixer = require('autoprefixer');

const rules = [
    {
        exclude: /node_modules/,
        test: /\.(scss)$/,
        use: [
            'style-loader',
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        autoprefixer({
                            grid: "autoplace",
                        }),
                    ],
                },
            },
            'sass-loader',
        ],
    },
    {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/react', '@babel/typescript']
            }
        }
    }
];

module.exports = rules;
