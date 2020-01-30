import React from 'react';

import {SEO} from '../containers';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <SEO />
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
    </Layout>
);

export default IndexPage;
