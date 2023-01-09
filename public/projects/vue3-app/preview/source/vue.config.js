const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/projects/vue3-app',
  indexPath: "vue3-app.html"
})
