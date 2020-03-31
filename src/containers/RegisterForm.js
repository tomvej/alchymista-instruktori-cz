import React from 'react';
import {Form as FinalForm} from 'react-final-form';
import {graphql, useStaticQuery} from 'gatsby';
import {
    Box,
    Button,
    Form,
    FormField,
    FormSection,
    renderMarkdown,
    SideBySide,
    Spinner,
    StringInput,
} from '../components';
import {required, submitForm, validEmail} from '../utils';
import SubmitError from './SubmitError';

export default () => {
    const {
        site: {siteMetadata: {formAction, formFields: {name, email, message}}},
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
                    }
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
                })}
                initialValues={{photoConsent: true}}
            >
                {({handleSubmit, valid, submitSucceeded, submitFailed, submitting}) => (
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
                        {submitFailed && <SubmitError />}
                        {submitSucceeded || (
                            <Button submit disabled={!valid || submitting}>
                                {submitting && <Spinner />}
                                {submitting && ' '}
                                Přihlásit se
                            </Button>
                        )}
                        {submitSucceeded && <Box>Díky za tvou přihlášku. Co nevidět se ti ozveme.</Box>}
                    </Form>
                )}
            </FinalForm>
        </FormSection>
    );
};
