import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

import style from './TwoColumnGallery.module.scss';

const TwoColumnGallery = ({images, children}) => (
    <div className={style.main}>
        <div className={style.content}>
            {children}
        </div>
        <div className={style.wrapper}>
            <div className={style.gallery}>
                {images.map((image) => (
                    <div key={image.src} className={style.image}>
                        <Image fluid={image} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

TwoColumnGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.node.isRequired,
};

export default TwoColumnGallery;
