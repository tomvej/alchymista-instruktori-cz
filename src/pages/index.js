import React from 'react';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Navlink} from '../components';
import {Faq, Info, RegisterForm} from '../containers';

const IndexPage = () => (
    <>
        <SEO />
        <Navbar brand="Alchymistův učeň">
            <Navlink to="about">O akci</Navlink>
            <Navlink to="info">Informace</Navlink>
            <Navlink to="register">Prihláška</Navlink>
            <Navlink to="faq">FAQ</Navlink>
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
        <Section name="info">
            <h1>Praktické informace</h1>
            <Info />
        </Section>
        <Section name="register">
            <h1>Přihláška</h1>
            <RegisterForm />
        </Section>
        <Section name="faq">
            <h1>Často kladené otázky</h1>
            <Faq />
        </Section>
    </>
);

export default IndexPage;
