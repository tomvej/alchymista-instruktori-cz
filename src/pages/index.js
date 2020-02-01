import React from 'react';

import './style.scss';

import {SEO} from '../containers';
import {Navbar, Title} from '../components';

const IndexPage = () => (
    <>
        <SEO />
        <Navbar brand="Alchymistův učeň">
            <li>Test 1</li>
            <li>Test 2</li>
        </Navbar>
        <Title title="Alchymistův učeň" subtitle="plně zážitková Tvrz" />
    </>
);

export default IndexPage;
