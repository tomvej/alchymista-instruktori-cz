import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const TeamMember = ({title, children, civil, costume}) => (
    <div>
        <h2>{title}</h2>
        {children}
        <Image fluid={civil} />
        <Image fluid={costume} />
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
