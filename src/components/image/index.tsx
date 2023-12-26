import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"

type nodeImage = {
    relativePath?: string
    extension?: string
    publicURL?: string
    childImageSharp?: any
}

type allFile = {
    node: nodeImage
}


export const Image = (props: any) => {
    // const data = useStaticQuery(graphql`
    // query {
    //     images: allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
    //         edges {
    //             node {
    //                 relativePath
    //                 extension
    //                 publicURL
    //                 childImageSharp {
    //                     fluid(maxWidth: 600) {
    //                         ...GatsbyImageSharpFluid
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     }
    // `);

    // const match: allFile = useMemo(() => data.images.edges.find(({ node }: allFile) => src === node.relativePath), [data, src]);

    // if (!match) return null;

    // const { node: { childImageSharp, publicURL, extension } = {} } = match;

    // if (extension === 'svg' || !childImageSharp) {
    //     return <img src={publicURL} {...rest} />;
    // }

    return <img {...props} loading="lazy" />;
};
