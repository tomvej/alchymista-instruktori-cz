import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import ResponsiveContainer from './ResponsiveContainer';
import MoreButton from './MoreButton';

import style from './Title.module.scss';

const Title = ({title, children, subtitle, more}) => {
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
                <div>
                    <div className={style.titleWrapper}>
                        <h1 className={style.title}>{title}</h1>
                        <h2 className={style.subtitle}>{subtitle}</h2>
                        <div className={style.summaryWrapper}>
                            <div className={style.summary}>
                                {children}
                                {more && <MoreButton to={more} />}
                            </div>
                        </div>
                    </div>
                </div>
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
    subtitle: PropTypes.string.isRequired,
    children: PropTypes.node,
    more: PropTypes.string,
};

Title.defaultProps = {
    children: null,
    more: null,
};

export default Title;
