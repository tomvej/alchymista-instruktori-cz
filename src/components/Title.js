import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ResponsiveContainer from './ResponsiveContainer';

import style from './Title.module.scss';

const Title = ({title, children}) => {
    const {background: {childImageSharp: {fluid}}} = useStaticQuery(graphql`
        query {
            background: file(relativePath: {eq: "title1a.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <header className={style.main}>
            <ResponsiveContainer className={style.container}>
                <h1 className={style.title}>
                    {title}
                </h1>
                {children}
            </ResponsiveContainer>
            <div className={style.background}>
                <BackgroundImage
                    fluid={fluid}
                    className={style.image}
                />
            </div>
        </header>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

Title.defaultProps = {
    children: null,
};

export default Title;
