import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {FormSection, renderMarkdown} from '../components';

export default () => {
    const {
        registerText: {childMarkdownRemark: {htmlAst: registerAst}},
    } = useStaticQuery(graphql`
        query {
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
        </FormSection>
    );
};
