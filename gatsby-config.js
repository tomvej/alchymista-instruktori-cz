module.exports = {
    siteMetadata: {
        title: 'Alchymistův učeň',
        description: 'Plně zážitková Tvrz',
        author: 'Tvrz',
        lang: 'cs',
        year: 2020,
        formFields: {
            name: 'name',
            email: 'email',
            message: 'message',
            photoConsent: 'consent',
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
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
    ],
};
