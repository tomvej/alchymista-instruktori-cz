import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FaqContainer, FaqItem, renderMarkdown} from '../components';

const renderNodes = (children) => renderMarkdown({type: 'root', children});

const isHeading = ({type, tagName}) => type === 'element' && tagName === 'h2';

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

    const {children: childNodes} = htmlAst;
    const firstHeading = childNodes.findIndex(isHeading);
    const sections = [];
    for (let index = firstHeading; index < childNodes.length; index += 1) {
        const node = childNodes[index];
        if (isHeading(node)) {
            sections.push({heading: node, children: []});
        } else {
            sections[sections.length - 1].children.push(node);
        }
    }

    return (
        <>
            {renderNodes(childNodes.slice(0, firstHeading))}
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
