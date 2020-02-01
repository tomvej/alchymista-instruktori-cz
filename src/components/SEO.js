import React from 'react';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

export default () => {
    const {site: {siteMetadata: {title, lang, description, author}}} = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            lang
          }
        }
      }
    `,
    );

    return (
        <Helmet
            htmlAttributes={{lang}}
            title={title}
            meta={[
                {
                    name: 'description',
                    content: description,
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: description,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: description,
                },
            ]}
        />
    );
};
