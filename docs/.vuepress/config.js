module.exports = {
  base: '/firetubela/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'FireTubeLa',
      description: 'Firebase, Youtube, Tripla'
    }
  },
  themeConfig: {
    logo: '/assets/images/hero.png',
    sidebarDepth: 2,
    repo: 'cuongtripla/firetubela',
    repoLabel: 'GitHub',
    docsRepo: 'cuongtripla/firetubela',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'External',
            items: [
              { text: 'Firebase', link: 'https://firebase.google.com/' },
              { text: 'Youtube', link: 'https://www.youtube.com/' },
              { text: 'Tripla', link: 'https://corp.tripla.jp/' },
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            '',
            'initial-firebase',
            'initial-vue'
          ]
        },
        // lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page',
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom']
  ],
}
