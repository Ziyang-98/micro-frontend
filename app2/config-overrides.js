const { name } = require("./package.json");

module.exports = {
  webpack: function override(config, env) {
    //To solve the problem that the main application will hang up after access: https://github.com/umijs/qiankun/issues/340
    config.entry = config.entry.filter(
      (e) => !e.includes("webpackHotDevClient")
    );

    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = "umd";
    config.output.jsonpFunction = `webpackJsonp_${name}`;
    return config;
  },
  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      return config;
    };
  },
};
