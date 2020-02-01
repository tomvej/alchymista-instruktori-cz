import React from 'react';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Navlink} from '../components';

const IndexPage = () => (
    <>
        <SEO />
        <Navbar brand="Alchymistův učeň">
            <Navlink to="about">O akci</Navlink>
            <Navlink to="register">Prihláška</Navlink>
        </Navbar>
        <Title title="Alchymistův učeň" subtitle="plně zážitková Tvrz">
            <SummaryTable
                items={{
                    Věk: '18+',
                    Termín: '14.\u201323. 8. 2020',
                    Cena: 'od 4500 Kč',
                }}
            />
        </Title>
        <Section name="about">
            <h1>Přijeď objevit svůj kámen mudrců</h1>
        </Section>
    </>
);

export default IndexPage;
