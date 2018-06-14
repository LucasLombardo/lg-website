module.exports = {
  siteMetadata: {
    title: 'Lombardo Graphics',
    desc: 'Vehicle Graphics and Sign company located in North Andover, Ma. Service offerings include Automobile and Truck lettering, Pinstriping, Airbrush work, Full Vehicle Wraps, and Custom Motorcycle Art.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        excerpt_separator: '<!-- end -->',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
