'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

// 给出正确的绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  context: path.resolve(__dirname, '../'),
  // 配置webpack编译入口
  entry: {
    index: './src/index.js'
  },
  // 配置webpack输出路径和命名规则
  output: {
    // webpack输出的目标文件夹路径（例如：/dist）
    path: config.build.assetsRoot,
    // webpack输出bundle文件命名格式
    filename: '[name].[hash:8].js',
    // webpack编译输出的发布路径
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  // 配置模块resolve的规则
  resolve: {
    // 自动resolve的扩展名
    extensions: ['.js', '.vue', '.json'],
    // 创建路径别名，有了别名之后引用模块更方便，例如
    // import Vue from 'vue/dist/vue.common.js'可以写成 import Vue from 'vue'
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'jquery': resolve('/node_modules/jquery/src/jquery.js')
    }
  },
  // 配置不同类型模块的处理规则
  module: {
    rules: [
      // ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/, // vue文件后缀
        loader: 'vue-loader', //使用vue-loader处理
        options: vueLoaderConfig  //options是对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,  // js文件后缀
        loader: 'babel-loader', //使用babel-loader处理
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')] //必须处理包含src和test文件夹
      },
      {
				test: /\.scss$/,  // scss文件后缀
				loaders: ["style", "css", "sass"]
			},
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  //图片后缀
        loader: 'url-loader', //使用url-loader处理
        options: {  //options是对loader做的额外选项配置
          limit: 10000, //图片小于10000字节时以base64的方式引用
          name: utils.assetsPath('img/[name].[hash:7].[ext]') // 其他的图片转移到静态资源文件夹
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,  // 对多媒体资源文件使用url-loader
        loader: 'url-loader',
        options: {
          limit: 10000, // 小于10K的资源转成base64编码的dataURL字符串写到代码中
          name: utils.assetsPath('media/[name].[hash:7].[ext]') // 其他的资源转移到静态资源文件夹
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, //字体文件
        loader: 'url-loader', //使用url-loader处理
        options: {
          limit: 10000, //字体文件小于10000字节的时候处理方式
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]') // 其他的资源转移到静态资源文件夹
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
