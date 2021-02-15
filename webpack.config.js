const pkg = require('./package.json');
const rules = require('./configs/rules.config');
const aliases= require('./configs/aliases.config');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: pkg.main,
        library: '',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            ...rules
        ]
    },
    resolve: {
        alias: aliases,
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx' ],
        modules: ['node_modules']
    },
};
