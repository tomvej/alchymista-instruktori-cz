import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {renderMarkdown} from '../utils';

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
    const {children: childNodes} = htmlAst;
    return (
        <>
            {renderMarkdown(childNodes[0])}
            <div style={{columnCount: 2}}>
                {renderNodes(childNodes.slice(1))}
            </div>
        </>
    );
};
