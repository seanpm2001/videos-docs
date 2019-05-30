module.exports = {
    title: 'Videos 2 Documentation',
    description: 'Videos 2 Documentation',
    base: '/videos/v2/',
    ga: 'UA-1547168-34',
    themeConfig: {
        docsRepo: 'dukt/videos-docs',
        docsDir: 'docs',
        docsBranch: 'v2',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        nav: [
            { text: 'Analytics', link: 'https://docs.dukt.net/analytics/v4/' },
            { text: 'Facebook', link: 'https://docs.dukt.net/facebook/v2/'},
            { text: 'Social', link: 'https://docs.dukt.net/social/v2/' },
            { text: 'Twitter', link: 'https://docs.dukt.net/twitter/v2/'},
            { text: 'Videos', link: '/' },
        ],
        sidebar: {
            '/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        '',
                        'requirements',
                        'installation',
                        'connect-youtube',
                        'connect-vimeo',
                        'configuration',
                    ]
                },
                {
                    title: 'Core Concepts',
                    collapsable: false,
                    children: [
                        'video-model',
                    ]
                },
                {
                    title: 'Fields',
                    collapsable: false,
                    children: [
                        'video-field',
                    ]
                },
            ],
        }
    }
}
