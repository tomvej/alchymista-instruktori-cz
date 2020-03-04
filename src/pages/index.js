import React from 'react';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Background} from '../components';
import {About, Faq, Footer, Fragments, Info, RegisterForm} from '../containers';

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
            <Fragments />
        </Section>
        <Section name="info">
            <Info />
        </Section>
        <Section name="register">
            <RegisterForm />
        </Section>
        <Section name="faq">
            <Faq />
        </Section>
        <Footer />
    </Background>
);

export default IndexPage;
