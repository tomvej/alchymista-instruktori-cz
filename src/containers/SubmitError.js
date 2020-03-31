import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Alert} from '../components';

export default () => {
    const {site: {siteMetadata: {contact}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    contact
                }
            }
        }
    `);

    return (
        <Alert>Přihlášení se nepodařilo. Zkus to znova a nebo nám napiš na <a href={`mailto:${contact}`}>{contact}</a>.</Alert>
    );
};
