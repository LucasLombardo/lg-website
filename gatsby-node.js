const path = require('path');
//need to use require syntax, rather than import. Used to be standard to use this syntax but now not many use cases
const { createFilePath } = require('gatsby-source-filesystem');


//how to handle each page node, gets called when gatsby is looking at each one of your files
//add slug to the markdown page nodes so we can use it to define the page paths
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    //pull out create node field from boundactioncreators
    const { createNodeField } = boundActionCreators;
    //check if the node type is markdown, if so it should be a new blog page
    if(node.internal.type === 'MarkdownRemark'){
        const slug = createFilePath({
            node,
            getNode,
            basePath: 'posts' //path where the blog posts are located
        });
        //attatch a node field to the node
        createNodeField({
            node,
            name: 'slug',
            value: `/p${slug}`
        })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    //create new promise that 1.)hits graphql and gets an array of slugs, 2.)iterates over slugs creating each page
    return new Promise((resolve, reject) => {
        graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields{
                            slug
                        }
                    }
                }
            }
        }
        `).then(result => {
            //once graphql query is complete, iterate over each slug
            result.data.allMarkdownRemark.edges.forEach(({node}) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/posts/postPage.js'),
                    context: {
                        slug: node.fields.slug,
                    }
                })
            })
            resolve();
        })
    })
}