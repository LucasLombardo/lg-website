import React from 'react'
import styled from 'styled-components'
import AlbumThumnail from '../components/gallery/albumThumnail'
import albums from '../data/albums.json'

const StyledAlbumGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Gallery = () => (
  <div>
    <h1>Gallery</h1>
    <StyledAlbumGrid>
      {albums.map((album) => (
        <AlbumThumnail
          name={album.title}
          slug={album.slug}
          thumnail={album.thumbnail}
          key={album.slug}
        />
      ))}
    </StyledAlbumGrid>
  </div>
)

export default Gallery
