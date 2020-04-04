const sass = require('sass');

module.exports = {
    siteMetadata: {
        title: 'Alchymistův učeň',
        subtitle: 'Přijeď hledat svůj kámen mudrců!',
        description: 'Při­jeď hle­dat to, co tě ve tvém ži­vo­tě na­pl­ňu­je – svůj ká­men mudr­ců.',
        author: 'Tvrz',
        contact: 'alchymista@instruktori.cz',
        fbEventId: '151196389586304',
        lang: 'cs',
        year: 2020,
        basicInfo: [
            {label: 'Věk', value: '18+'},
            {label: 'Termín', value: '14.\u201323. 8. 2020'},
            {label: 'Cena', value: 'od 4500 Kč'},
        ],
        formAction: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJFAgRYXMRshSbqp5p_1Vwu7Wuye8VDzxMo8OwHM9cxWRHjA/formResponse',
        formFields: {
            name: 'entry.1528101418',
            email: 'entry.64509220',
            message: 'entry.1336304104',
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'text',
                path: `${__dirname}/src/text`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'team',
                path: `${__dirname}/src/team`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'gallery',
                path: `${__dirname}/src/gallery`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Alchymistův učeň',
                short_name: 'Alchymistův učeň',
                start_url: '/',
                background_color: '#cfba9b',
                theme_color: '#3D2B1F',
                display: 'minimal-ui',
                icon: 'src/images/squared-circle.svg',
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                implementation: sass,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Eagle Lake',
                    'Proza Libre',
                ],
                display: 'swap',
            },
        },
    ],
};
