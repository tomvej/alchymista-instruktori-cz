import React from 'react';
import {Form} from 'react-final-form';
import {useStaticQuery, graphql} from 'gatsby';
import {CheckboxField, ConsentArea, FormField, StringInput} from '../components';
import {required, validEmail, renderMarkdown} from '../utils';

export default () => {
    const {
        site: {siteMetadata: {formFields: {name, email, message, photoConsent}}},
        consentText: {childMarkdownRemark: {htmlAst}},
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
        }
    `);

    return (
        <Form
            onSubmit={(values) => console.log(values)}
        >
            {() => (
                <div>
                    <FormField
                        label="Jméno a příjmení"
                        placeholder="Tvoje jméno"
                        name={name}
                        validate={[required]}
                        component={StringInput}
                    />
                    <FormField
                        label="E-mail"
                        placeholder="Tvůj e-mail"
                        name={email}
                        validate={[required, validEmail]}
                        component={StringInput}
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
                        {renderMarkdown(htmlAst)}
                    </ConsentArea>
                </div>
            )}
        </Form>
    );
};
