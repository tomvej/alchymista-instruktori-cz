import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {TwoColumn, renderMarkdown, Unbreakable} from '../components';
import splitHeadings from './splitHeadings';

const renderNodes = (children) => renderMarkdown({type: 'root', children});

export default () => {
    const {info: {childMarkdownRemark: {htmlAst}}} = useStaticQuery(graphql`
        query {
            info: file(relativePath: {eq: "info.md"}) {
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
            <TwoColumn>
                {sections.map(({heading, children}, index) => (
                    // nothing else to use but index
                    // eslint-disable-next-line react/no-array-index-key
                    <Unbreakable key={index}>
                        {renderNodes([heading].concat(children))}
                    </Unbreakable>
                ))}
            </TwoColumn>
        </>
    );
};
