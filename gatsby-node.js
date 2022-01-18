const albums = require('./src/data/albums.json')
const path = require(`path`)

// create gallery pages for each album
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const GalleryTemplate = path.resolve(
    './src/components/gallery/galleryTemplate.js'
  )
  albums.forEach((album) => {
    createPage({
      path: `/gallery/${album.slug}`,
      component: GalleryTemplate,
      context: { ...album },
    })
  })
}
