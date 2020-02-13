import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import {useStaticQuery, graphql} from 'gatsby';
import {Button, CheckboxField, ConsentArea, FormField, StringInput, Form, SideBySide} from '../components';
import {required, validEmail, renderMarkdown} from '../utils';

export default () => {
    const {
        site: {siteMetadata: {formFields: {name, email, message, photoConsent}}},
        consentText: {childMarkdownRemark: {htmlAst: consentAst}},
        registerText: {childMarkdownRemark: {htmlAst: registerAst}}
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    formFields {
                        name
                        email
                        message
                        photoConsent
                    }
                }
            }
            consentText: file(relativePath: {eq: "photoConsent.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
            registerText: file(relativePath: {eq: "register.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);

    return (
        <>
            {renderMarkdown(registerAst)}
            <FinalForm
                onSubmit={(values) => console.log(values)}
                initialValues={{[photoConsent]: true}}
            >
                {({handleSubmit, valid}) => (
                    <Form onSubmit={handleSubmit}>
                        <SideBySide
                            left={(
                                <FormField
                                    label="Jméno a příjmení"
                                    placeholder="Tvoje jméno"
                                    name={name}
                                    validate={[required]}
                                    component={StringInput}
                                />
                            )}
                            right={(
                                <FormField
                                    label="E-mail"
                                    placeholder="Tvůj e-mail"
                                    name={email}
                                    validate={[required, validEmail]}
                                    component={StringInput}
                                />
                            )}
                        />
                        <FormField
                            name={message}
                            placeholder="Chceš nám něco vzkázat?"
                            component={StringInput}
                            area
                        />
                        <CheckboxField
                            name={photoConsent}
                            label="Uděluji souhlas s focením"
                        />
                        <ConsentArea>
                            {renderMarkdown(consentAst)}
                        </ConsentArea>
                        <Button submit disabled={!valid}>Přihlásit se</Button>
                    </Form>
                )}
            </FinalForm>
        </>
    );
};
