import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import {useStaticQuery, graphql} from 'gatsby';
import {
    Button,
    CheckboxField,
    ConsentArea,
    FormField,
    StringInput,
    Form,
    SideBySide,
    Box,
    FormSection,
    renderMarkdown,
} from '../components';
import {required, validEmail, submitForm} from '../utils';
import SubmitError from './SubmitError';

export default () => {
    const {
        site: {siteMetadata: {formAction, formFields: {name, email, message, photoConsent}}},
        consentText: {childMarkdownRemark: {htmlAst: consentAst}},
        registerText: {childMarkdownRemark: {htmlAst: registerAst}},
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    formAction
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
        <FormSection>
            {renderMarkdown(registerAst)}
            <FinalForm
                onSubmit={(values) => submitForm(formAction, {
                    [name]: values.name,
                    [email]: values.email,
                    [message]: values.message,
                    [photoConsent]: values.photoConsent,
                })}
                initialValues={{photoConsent: true}}
            >
                {({handleSubmit, valid, submitSucceeded, submitFailed}) => (
                    <Form onSubmit={handleSubmit}>
                        <SideBySide
                            left={(
                                <FormField
                                    label="Jméno a příjmení"
                                    placeholder="Tvoje jméno"
                                    name="name"
                                    validate={[required]}
                                    component={StringInput}
                                />
                            )}
                            right={(
                                <FormField
                                    label="E-mail"
                                    placeholder="Tvůj e-mail"
                                    name="email"
                                    validate={[required, validEmail]}
                                    component={StringInput}
                                />
                            )}
                        />
                        <FormField
                            name="message"
                            placeholder="Chceš nám něco vzkázat?"
                            component={StringInput}
                            area
                        />
                        <CheckboxField
                            name="photoConsent"
                            label="Uděluji souhlas s focením"
                        />
                        <ConsentArea>
                            {renderMarkdown(consentAst)}
                        </ConsentArea>
                        {submitFailed && <SubmitError />}
                        {submitSucceeded || <Button submit disabled={!valid}>Přihlásit se</Button>}
                        {submitSucceeded && <Box>Díky za tvou přihlášku. Co nevidět se ti ozveme.</Box>}
                    </Form>
                )}
            </FinalForm>
        </FormSection>
    );
};
