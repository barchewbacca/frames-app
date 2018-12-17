import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const StyledList = styled.div`
  .list-header {
    text-align: center;
    color: ${props => props.theme.colorGrey};
    margin-bottom: 3rem;
  }

  .list-body {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    margin: -1.6rem -0.8rem;
  }
`;

const List = props => {
  if (props.error) {
    return (
      <div className="container">
        <p>{props.error.message}</p>
      </div>
    );
  }

  if (props.isLoading) {
    return (
      <div className="container">
        <StyledList>
          <div className="list-header">
            <p>Loading ...</p>
          </div>
        </StyledList>
      </div>
    );
  }

  return (
    <div className="container">
      <StyledList>
        <div className="list-header">
          {props.frames.length ? props.frames.length : 'No'} frames found
        </div>
        <ul className="list-body">
          {props.frames.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </StyledList>
    </div>
  );
};

export default List;
