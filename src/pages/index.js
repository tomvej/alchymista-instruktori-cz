import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import './style.scss';

import {Background, Navbar, Section, SEO, SummaryTable, Title} from '../components';
import {About, Contact, Faq, Footer, Fragments, Gallery, Info, RegisterForm, Team} from '../containers';

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
                    contact: 'Kontakt',
                }}
            />
            <Title
                title={title}
                summaryTable={(
                    <SummaryTable
                        actionLink="register"
                        actionText="Přihlásit se"
                        items={basicInfo}
                    />
                )}
            />
            <Section name="about">
                <About />
                <Fragments />
            </Section>
            <Section name="info">
                <Info />
                <Gallery />
            </Section>
            <Section name="register" narrow>
                <RegisterForm />
            </Section>
            <Section name="faq" narrow>
                <Faq />
            </Section>
            <Section name="team" narrow>
                <Team />
            </Section>
            <Section name="contact" narrow>
                <Contact />
            </Section>
            <Footer />
        </Background>
    );
};

export default IndexPage;
