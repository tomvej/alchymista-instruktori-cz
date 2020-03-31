import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FaqContainer, FaqItem, renderMarkdown} from '../components';
import splitHeadings from './splitHeadings';

const renderNodes = (children) => renderMarkdown({type: 'root', children});

export default () => {
    const {faq: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            faq: file(relativePath: {eq: "faq.md"}) {
                childMarkdownRemark {
                    htmlAst
                }
            }
        }
    `);
    const [preface, sections] = splitHeadings(htmlAst, 2);

    return (
        <>
            {renderNodes(preface)}
            <FaqContainer>
                {sections.map(({heading, children}, index) => (
                    // nothing else to use but index
                    // eslint-disable-next-line react/no-array-index-key
                    <FaqItem key={index} title={renderNodes(heading.children)}>
                        {renderNodes(children)}
                    </FaqItem>
                ))}
            </FaqContainer>
        </>
    );
};
