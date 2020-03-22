import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {Button, Center, Image} from '../components';

export default () => {
    const {site: {siteMetadata: {contact, fbEventId}}, background} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    contact
                    fbEventId
                }
            }
            background: file(relativePath: {eq: "stih.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <>
            <Image fluid={background.childImageSharp.fluid} />
            <Center>
                <h1>Kontakt</h1>
                <p>Chceš se na něco zeptat? Napiš nám!</p>
                <p>
                    <Button href={`mailto:${contact}`} outline>
                        <FAIcon icon={faEnvelope} /> {contact}
                    </Button>
                </p>
                <p>Jsme aktivní i na Facebooku:</p>
                <p>
                    <Button href={`https://www.facebook.net/events/${fbEventId}`} outline>
                        <FAIcon icon={faFacebookF} /> Sdílej!
                    </Button>
                </p>
            </Center>

        </>
    );
};
