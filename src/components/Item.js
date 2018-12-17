import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import placeholder from './../assets/svg/placeholder.svg';
import { BASE_IMAGE_URL } from './../constants/endpointTypes';

const StyledItem = styled.li`
  width: 100%;
  padding: 1.6rem 0.8rem;

  @media (min-width: 381px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.3333%;
  }

  @media (min-width: 1025px) {
    width: 25%;
  }

  .item-figure {
    background-color: ${props => props.theme.colorLight};
    background-image: url(${placeholder});
    background-repeat: no-repeat;
    background-size: 10rem;
    background-position: center;
    position: relative;
    padding-top: 100%;
  }

  .item-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .item-title {
    margin-top: 0.5rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colorGrey};

    strong {
      font-weight: 600;
      color: ${props => props.theme.colorBlack};
    }
  }
`;

const Item = props => {
  return (
    <StyledItem>
      <Link to={`/${props.item.sku}`}>
        <figure className="item-figure">
          <img
            className="item-img lazyload"
            data-src={`${BASE_IMAGE_URL}/w_650/v1/${props.item.front_image}`}
            alt=""
          />
        </figure>
        <h2 className="item-title">
          <strong>{props.item.name}</strong> {props.item.color}
        </h2>
      </Link>
    </StyledItem>
  );
};

export default Item;
