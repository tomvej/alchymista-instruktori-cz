import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import style from './TeamMember.module.scss';

const TeamMember = ({title, children, civil, costume}) => (
    <div className={style.main}>
        <Image fluid={civil} className={style.image} />
        <div className={style.text}>
            <h2 className={style.title}>{title}</h2>
            {children}
        </div>
    </div>
);

TeamMember.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    civil: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    costume: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

TeamMember.defaultProps = {
    children: null,
};

export default TeamMember;
