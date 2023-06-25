module.exports = {
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/insapi": {
        target: "http://39.100.6.76:8999",
        changeOrigin: true,
        pathRewrite: {
          "^/insapi": "/insapi",
        },
      },
      "/pred": {
        target: "http://39.100.6.76:5000",
        changeOrigin: true,
        pathRewrite: {
          "^/pred": "/pred",
        },
      },
    },
  },
};
