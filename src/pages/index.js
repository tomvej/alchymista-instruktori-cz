import React from 'react';

import './layout.scss';

import {SEO} from '../containers';
import {Navbar} from '../components';

const IndexPage = () => (
    <>
        <SEO />
        <Navbar brand="Alchymistův učeň">
            <li>Test 1</li>
            <li>Test 2</li>
        </Navbar>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    </>
);

export default IndexPage;
