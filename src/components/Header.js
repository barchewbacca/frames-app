import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 0.1rem solid #efefef;
  color: ${props => props.theme.colorBlack};

  .header-inner {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 6rem;
  }
`;

const Logo = styled.h1`
  font-size: 1.4rem;
  font-weight: 600;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container">
        <div className="header-inner">
          <Logo>
            <Link to="/">frames</Link>
          </Logo>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
