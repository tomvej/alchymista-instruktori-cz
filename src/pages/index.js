import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Background} from '../components';
import {About, Faq, Footer, Fragments, Info, RegisterForm, Team} from '../containers';

const IndexPage = () => {
    const {site: {siteMetadata: {title, basicInfo}}} = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    basicInfo {
                        label
                        value
                    }
                }
            }
        }
    `);
    return (
        <Background>
            <SEO />
            <Navbar
                brand={title}
                navlinks={{
                    about: 'O akci',
                    info: 'Informace',
                    register: 'Přihláška',
                    faq: 'FAQ',
                    team: 'Tým',
                }}
            />
            <Title title={title}>
                <SummaryTable
                    actionLink="register"
                    actionText="Přihlásit se"
                    items={basicInfo}
                />
            </Title>
            <Section name="about">
                <About />
                <Fragments />
            </Section>
            <Section name="info">
                <Info />
            </Section>
            <Section name="register" narrow>
                <RegisterForm />
            </Section>
            <Section name="faq" narrow>
                <Faq />
            </Section>
            <Section name="team">
                <Team />
            </Section>
            <Footer />
        </Background>
    );
};

export default IndexPage;
