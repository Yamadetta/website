const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: "/projects/form-validation/",
  indexPath: "form-validation.html",
});
