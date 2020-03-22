import React from 'react';
import PropTypes from 'prop-types';

import style from './MultiRowGallery.module.scss';
import Image from './Image';
import {seq} from '../utils';

const MultiRowGallery = ({images, rows}) => (
    <div className={style.main}>
        <div className={style.sizer}>
            {seq(rows).map((i) => <Image key={i} fixed={images[0]} />)}
        </div>
        <div className={style.images}>
            {images.map((image) => (
                <Image key={image.src} fixed={image} />
            ))}
        </div>
    </div>
);

MultiRowGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    rows: PropTypes.number.isRequired,
};

export default MultiRowGallery;
