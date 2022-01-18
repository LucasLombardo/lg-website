import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import ScrollUpBtn from '../../components/scrolltotop'

const StyledAlbumThumb = styled.div`
    margin: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    figure {
        width: 240px;
        height: 180px;
        margin: 0;
        padding: 0;
        background: #fff;
        overflow: hidden;
        img {
            -webkit-transform: scale(1);
            transform: scale(1);
            -webkit-transition: .3s ease-in-out;
            transition: .3s ease-in-out;
        }
      }
    }
    .desc {
      width: 240px;
      background: #111;
      padding: 10px 0;
      text-align: center;
      span {
        color: #fff;
        font-size: 1.1em;
        -webkit-transition: .3s;
        transition: .3s;
        border: none;
        text-decoration: none;
      }
    }
    &:hover {
      figure {
        img {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
      }
      span {
        font-size: 1.15em;
      }
    }
  }
`

/* eslint-disable */

export default class AlbumThumnail extends Component {
  render() {
    const { thumnail, name, slug } = this.props
    const path = `/gallery/${slug}`
    return (
      <StyledAlbumThumb>
        <ScrollUpBtn />
        <Link to={path}>
          <figure>
            <img src={thumnail} alt={name} />
          </figure>
          <div className="desc">
            <span>{name}</span>
          </div>
        </Link>
      </StyledAlbumThumb>
    )
  }
}
