const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api/': {
        target:'http://10.3.112.10:8088', 
        changeOrigin:true, 
        pathRewrite:{ 
        'http://10.3.112.10:8088': ''  
      }}
    },
  }
})
