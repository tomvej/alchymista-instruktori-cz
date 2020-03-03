import React from 'react';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Background} from '../components';
import {About, Faq, Footer, Info, RegisterForm} from '../containers';

const IndexPage = () => (
    <Background>
        <SEO />
        <Navbar
            brand="Alchymistův učeň"
            navlinks={{
                about: 'O akci',
                info: 'Informace',
                register: 'Přihláška',
                faq: 'FAQ',
            }}
        />
        <Title title="Alchymistův učeň">
            <SummaryTable
                actionLink="register"
                actionText="Přihlásit se"
                items={{
                    Věk: '18+',
                    Termín: '14.\u201323. 8. 2020',
                    Cena: 'od 4500 Kč',
                }}
            />
        </Title>
        <Section name="about">
            <About />
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
        <Footer />
    </Background>
);

export default IndexPage;
