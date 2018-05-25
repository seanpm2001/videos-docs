module.exports = {
    title: 'Videos 2 Documentation',
    description: 'Videos 2 Documentation',
    base: '/videos/v2/',
    ga: 'UA-1547168-34',
    themeConfig: {
        nav: [
            { text: 'Analytics', link: 'https://docs.dukt.net/analytics/v4/' },
            { text: 'Social', link: 'https://docs.dukt.net/social/v2/' },
            { text: 'Videos', link: '/' },
        ],
        sidebar: {
            '/': [
                {
                    title: 'Introduction',
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