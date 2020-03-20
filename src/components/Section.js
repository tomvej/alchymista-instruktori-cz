import React from 'react';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';

import ResponsiveContainer from './ResponsiveContainer';
import style from './Section.module.scss';

const Section = ({name, children, narrow}) => (
    <section id={name}>
        <ResponsiveContainer narrow={narrow}>
            <Element name={name} className={style.main}>
                {children}
            </Element>
        </ResponsiveContainer>
    </section>
);
Section.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
    narrow: PropTypes.bool,
};

Section.defaultProps = {
    children: null,
    narrow: false,
};

export default Section;
