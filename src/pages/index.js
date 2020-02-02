import React from 'react';

import './style.scss';

import {SEO, Navbar, SummaryTable, Title, Section, Navlink, FaqContainer, FaqItem} from '../components';

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
        <Section name="faq">
            <h1>Často kladené otázky</h1>
            <FaqContainer>
                <FaqItem title="Co když mi kostým nebude sedět?">
                    <p>
                        V dotazníku si od tebe vyžádáme tvé základní míry, takže se do kostýmu téměř jistě vejdeš.
                        Možná ti bude trochu větší, ale ve středověku snad jen panstvo mělo perfektně padnoucí oblečení,
                        takže na tom všichni budeme stejně.
                    </p>
                    <p>Navíc, čím větší kostým, tím více se pod něj vejde teplých vrstev.</p>
                </FaqItem>
                <FaqItem title="Co když bude zima? Bude mi kostým stačit?">
                    <p>
                        Kostým je suknice, která sahá mužům po kolena a ženám až po kotníky [viz obrázek].
                        Je dostatečně volná, takže se pod ni vejdou dvě až tři vrstvy teplého oblečení.
                    </p>
                    <p>Kalhoty a boty budeš mít vlastní.</p>
                </FaqItem>
                <FaqItem title="Můžu si dovézt vlastní kostým?">
                    <p>Jasně! Jen si dej pozor, aby nebyl moc zdobný nebo neměl luxusní doplňky. Budeš v roli prostého vesničana.</p>
                    <p>
                        Pokud kostým nemáš, můžeš si ho vyrobit. Podívej se na návod (mužský oděv a ženský oděv).
                        Nevyžadujeme to ale po tobě, základní kostým dostaneš.
                    </p>
                </FaqItem>
            </FaqContainer>
        </Section>
    </>
);

export default IndexPage;
