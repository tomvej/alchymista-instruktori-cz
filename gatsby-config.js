const sass = require('sass');

module.exports = {
    siteMetadata: {
        title: 'Alchymistův učeň',
        description: 'Plně zážitková Tvrz',
        author: 'Tvrz',
        lang: 'cs',
        year: 2020,
        formAction: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeJFAgRYXMRshSbqp5p_1Vwu7Wuye8VDzxMo8OwHM9cxWRHjA/formResponse',
        formFields: {
            name: 'entry.1528101418',
            email: 'entry.64509220',
            message: 'entry.1336304104',
            photoConsent: 'entry.826063302',
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
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Alchymistův učeň',
                short_name: 'Alchymistův učeň',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
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
    ],
};
