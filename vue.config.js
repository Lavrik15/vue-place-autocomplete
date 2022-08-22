module.exports = {
    lintOnSave: false,
    configureWebpack: {
        output: {
            libraryExport: 'default'
        }
    },
    devServer: {
        port: 8091,
    },
};
