module.exports = {
    title: "The Last Day",
    description: "An introductory Eberron scenario",

    themeConfig: {
        sidebar: [
            '/',
            {
                title: "Scenario",
                collapsable: false,
                children: [
                    'orders',
                    'patrol',
                    'enemy-force-located',
                ].map(page => 'scenario/' + page)
            }
        ]
    }
}