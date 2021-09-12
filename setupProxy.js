const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/",
    createProxyMiddleware({
      //   target: "http://openapi.data.go.kr",
      target: "http://apis.data.go.kr/",
      //   changeOrigin: true,
    })
  );
};
