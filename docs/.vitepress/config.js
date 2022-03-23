const baseDir = process.env.NODE_ENV == 'production' ? '/blog/' : '/';

module.exports = {
  base: baseDir,
  title: '文章',
  description: 'lili blog',
  head: [
    [
      'link',
      {rel: 'shortcut icon', href: '/favicon.ico'}
    ]
  ],
  themeConfig: {
    sidebar: [
      {
        text: '原生 javascript 实现 call apply 方法',
        link: '/javascript/原生 javascript 实现 call apply 方法'
      },
      {
        text: '数组去重',
        link: '/javascript/数组去重'
      },
      {
        text: '函数防抖和函数节流',
        link: '/javascript/函数防抖和函数节流'
      }
    ]
  }
}