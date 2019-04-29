
`vue cli 3x` 发布已经有好长一段时间了，`webpack 4x` 现在版本已经到了 4.28.0；如果你现在用或者不用手脚架搭建项目，我都推荐你使用 `webpack 4x`，体验一把新技术带来的变化。我们可以用稳定版本的，稳定版本一般是没有问题，如果有问题，恭喜你，你推动了社区的发展。我们在一个好时代有问题可以作者提 `issue` 或者 `pull requests` 

我也体验一把 `vue cli 3x` 手脚架构建项目，拿公司的一个移动端小项目试验了一把。结果有点让我有点吃惊。公司项目使用的是 `npm` 命令，我 `vue cli 3x` 构建用的是 `yarn`，这个应该不影响。还有一点点区别是公司项目没有用 `CDN` ，我在构建的时候顺便项目优化了一下使用了这个 `CDN`（    `"vue-router": "VueRouter","element-ui": "ELEMENT",'v-charts':'VCharts','echarts': 'echarts'`），其他地方就没有区别了。但是总的来说肯定是 `webpack 4x` 比之前更好，要不然他版本升级意义在哪呢？

 `vue cli 2x` 和 `vue cli 3x` 项目结构差别：少了`build` 和 `config` 文件。如果我们需要另外配置环境直接写`.env.XXX`，修改配置文件直接新建`vue.config.js` 在里面配置。打包的时候直接传入 `--mode XXX` 就打包了不同的环境了。我更喜欢新版本，看上去简洁 
注：

`h5-web-app` 是  `vue cli 2x` 构建的 `"webpack": "^3.6.0"`

`mobile` 是  `vue cli 3x` 构建的 `"version": "4.26.1"`


![](https://user-gold-cdn.xitu.io/2018/12/20/167cac204a171369?w=1350&h=668&f=png&s=69713)

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac21f99f45ac?w=1296&h=527&f=png&s=71662)
整体看上去没有那么笨重，很多事情 `vue` 都帮我们做了

`vue.config.js` 文件大致内容

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac260f4d6740?w=1312&h=679&f=png&s=66214)

`build` 项目第一次


![](https://user-gold-cdn.xitu.io/2018/12/20/167cac245c96a6bb?w=1157&h=373&f=png&s=56880)

`build` 项目第二次


![](https://user-gold-cdn.xitu.io/2018/12/20/167cac27d9965618?w=1151&h=376&f=png&s=56684)

打包后占用内存

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac29577e2f10?w=847&h=621&f=png&s=32937)

本地启动项目（前后两次）


![](https://user-gold-cdn.xitu.io/2018/12/20/167cac2b0995556a?w=1360&h=690&f=png&s=174302)

首页加载时间

`vue cli 3x`

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac2cdbaf2366?w=1346&h=684&f=png&s=303804)

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac2f5efbe4c9?w=1348&h=686&f=png&s=304525)

`vue cli 2x`

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac30f83ac5be?w=1357&h=723&f=png&s=325655)

![](https://user-gold-cdn.xitu.io/2018/12/20/167cac33b76be3bc?w=1356&h=720&f=png&s=318732)

一顿折腾，前后对比还是能看到具体的数据差别的。我是初学者，如有什么地方不对，请指出，愿意学习改进。目前我司线上是没有优化的。

我个人认为 `webpack` 构建速度还是蛮重要的，深刻体会。实在是受不了每次编译所要等待时间，自己动手尝试了一下，新版本给我带来的感受。网传
![](https://user-gold-cdn.xitu.io/2019/2/1/168a81905489182a?w=1438&h=560&f=png&s=150647)
夸张不夸张我不知道，但是自身体验有明显感觉到。

附上一份自己整理的 `webpack 4x` 的配置和 `vue cli 3x` 的配置

`vue.config.js`

```
const path = require('path')
//去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
//gzip压缩插件
const CompressionWebpackPlugin = require('compression-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  outputDir: process.env.outputDir,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.0.001:8080',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/gateApi': {
        target: 'http://192.168.0.002:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/xsApi': {
        target: 'http://192.168.0.003:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/xsApi': ''
        }
      }
    }
  },
  configureWebpack: config => {
  config.externals={
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter",
    "element-ui": "ELEMENT",
    'v-charts':'VCharts',
    'echarts': 'echarts',
  }
    let plugins = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: true,
            drop_console: true,
          },
        },
        sourceMap: false,
        parallel: true,
      }),
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' + ['js', 'css'].join('|') +
          ')$',
        ),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ]
    if (process.env.NODE_ENV !== 'development') {
    //在开发环境不压缩，有console日志
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  lintOnSave: true,
  chainWebpack: (config) => {
    //配置别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@constant', resolve('src/constants'))
      .set('@components', resolve('src/components'))
      .set('@base', resolve('src/base'))
      .set('@api', resolve('src/api'))
      .set('@common', resolve('src/common'))
      .set('@utils', resolve('src/utils'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@mixin', resolve('src/mixin'))
      .set('@img', resolve('public/img'))
  }
}

```

在我们实际的项目中，肯定是需要配置不同的环境的。在环境这一块我也是折腾了好长一段时间，求助各路朋友才弄明白了。菜鸡一个看不懂文档，也很无奈。记录这一路踩的坑
1. 多环境打包不同的文件

![](https://user-gold-cdn.xitu.io/2019/2/1/168a826e9b5b335e?w=2874&h=800&f=png&s=275045)

`npm run build ` 会读取 `.env.production` 文件里面的配置的变量
`npm run Devbuild ` 会读取 `.env.dev` 文件里面的配置的变量

注意了:只有以`VUE_APP_ `开头的变量会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中。我在这个问题上卡壳一个上午，因为没有加`VUE_APP_ `，总是获取不到不同环境的不同变量

2.`pm2` 启动项目（记录给自己看）
    我只试过`pm2` 启动，其他的没有试，也就不懂。`pm2` 启动项目使用`http proxy` 做代理，所以也需要环境，这时候我们就可以直接用`vue.config.js`里面的就好了（好像说不清，来张截图吧）
    
![](https://user-gold-cdn.xitu.io/2019/2/1/168a834d6e9e61bc?w=2512&h=1212&f=png&s=409740)

好像是说完了，最后说说这次折腾的感受吧，项目体验就不说了。这次明白了几个小小的知识点

1.`mac自带了python2.7` 打包之后进入打包文件 `dist` 可以用`python -m SimpleHTTPServer 80` 启动项目，和好像和 `pm2` 效果一样的，

2.知道了一点点关于`SSR` 的知识点
是把这个工作放在服务器端做，直接在服务器端生成你想要的最终的页面，然后返回给浏览器，可以做`SEO`优化和首屏加载速度优化

3.怎么看错误日志，定位然后解决问题

4.`netstat -an | grep 8081` 和 `lsof -nP -i tcp | grep node` 这两个命令应该是看端口号上面的吧

#### 我是初学者，很多地方不懂，说的不对，请多多指导。让我长点知识

--------------------------------------------------------------------------------

我领导给我补充了一个知识点：浏览器在请求文件或者接口的时候，不同的域名可以并发进行，解释了上面 `mobile` 项目请求的时候为什么同一时间可以加载多个文件，这可能也是优化首页加载速度的知识点。  
