import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { BASE_IMAGE_URL } from './../constants/endpointTypes';

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  .title {
    font-size: 3rem;
    font-weight: 600;
    color: ${props => props.theme.colorBlack};
  }

  .subtitle {
    font-size: 1.8rem;
    font-weight: 700;
    margin-top: 3rem;
  }

  .price {
    font-size: 2.8rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  .figure {
    position: relative;
    background-color: ${props => props.theme.colorLight};
    padding-top: 100%;
    height: 0;

    @media (min-width: 768px) {
      width: 50%;
      padding-top: 50%;
    }
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }

  .info {
    padding: 2rem;
    font-size: 1.6rem;
    color: ${props => props.theme.colorDark};

    @media (min-width: 768px) {
      padding: 1rem 0 1rem 4rem;
      width: 50%;
    }

    @media (min-width: 1025px) {
      padding: 1rem 0 1rem 7rem;
    }
  }

  .list {
    margin: 0;
    padding: 0 0 0 2rem;
  }

  .back-link {
    font-size: 1.6rem;
    font-weight: 700;
    margin-top: 4rem;

    a {
      padding-bottom: 0.5rem;
      transition: border 0.2s ease-in-out;
      border-bottom: 0.2rem dashed ${props => props.theme.colorDark};
    }

    a:hover {
      border-color: transparent;
    }
  }
`;

const Details = props => {
  if (!props.frames.length) return null;

  const [details] = props.frames.filter(frame => {
    return frame.sku === props.frameId;
  });

  return (
    <div className="container">
      <StyledDetails>
        <div className="figure">
          <img
            className="image lazyload"
            data-src={`${BASE_IMAGE_URL}/w_600/v1/${details.front_image}`}
            alt=""
          />
        </div>
        <div className="info">
          <h2 className="title">{details.name}</h2>
          <div className="price">€{details.price}</div>
          <h3 className="subtitle">Description</h3>
          <p className="description">{details.description}</p>
          <h3 className="subtitle">Details</h3>
          <ul className="list">
            <li>Material: {details.material}</li>
            <li>Color: {details.color}</li>
            <li>Sex: {details.sex}</li>
          </ul>
          <div className="back-link">
            <Link to="/">← Back to list</Link>
          </div>
        </div>
      </StyledDetails>
    </div>
  );
};

export default Details;
