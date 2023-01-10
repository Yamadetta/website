const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/projects/tic-tac-toe',
  indexPath: "tic-tac-toe.html"
})
