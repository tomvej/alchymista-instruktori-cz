import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import style from './TeamMember.module.scss';

const TeamMember = ({title, children, image}) => (
    <div className={style.main}>
        <div className={style.imagePositioner}>
            <div className={style.imageSizer}>
                <div className={style.imageWrapper}>
                    <Image
                        fluid={image}
                        title={title}
                    />
                </div>
            </div>
        </div>
        <div className={style.text}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </div>
    </div>
);

TeamMember.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    image: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

TeamMember.defaultProps = {
    children: null,
};

export default TeamMember;
