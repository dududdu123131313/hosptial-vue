const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': { // 使用路径前缀作为代理匹配规则，比如前端请求路径是 /api/doctors/department 这样的就会被匹配
        target: 'http://10.3.112.10:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // 正则表达式，意思是把请求路径中开头的 /api 部分去掉，这样就能和后端实际的路由路径对应上了
        }
      }
    }
  }
})