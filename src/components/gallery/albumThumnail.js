import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledAlbumThumb = styled.div`
    margin: 5px;
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
        &:hover {
            img {
                -webkit-transform: scale(1.3);
                transform: scale(1.3);
            }
        }
    }
    .desc {
        width: 240px;
        background: #111;
        color: #fff;
        font-size: 1.1em;
        text-align: center;
        padding: 10px 0;
    }
`;

/* eslint-disable */

export default class AlbumThumnail extends Component {
  render() {
    const { thumnail, name, slug } = this.props;
    const path = `/gallery/${slug}`;
    return (
      <Link to={path}>
        <StyledAlbumThumb>
          <figure>
            <img src={thumnail} alt={name} />
          </figure><div className="desc">{name}</div>
        </StyledAlbumThumb>
      </Link>
    );
  }
}

