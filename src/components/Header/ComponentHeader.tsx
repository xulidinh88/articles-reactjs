import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { GrBlog } from 'react-icons/gr';
import { GiCoffeeMug } from 'react-icons/gi';

import { Colors } from '@enums';

export const ComponentHeader = () => {
  return (
    <StyledHome>
      <StyledLogo>
        <GrBlog className="logo-icon" />
        <h2 className="text-logo">Articles</h2>
      </StyledLogo>
      <StyledNavbar>
        <ul className="nav-list">
          <li className="nav-item">
            <StyledLink exact to="/" activeClassName="isActive">
              Home
            </StyledLink>
          </li>
          <li className="nav-item">
            <StyledLink to="/about" activeClassName="isActive">
              About
            </StyledLink>
          </li>
        </ul>
      </StyledNavbar>
      <button className="order-coffee">
        <GiCoffeeMug className="icon" />
        Buy a coffee
      </button>
    </StyledHome>
  );
};

const StyledHome = styled.div`
  position: sticky;
  top: 0;
  z-index: 999999;
  background-color: ${Colors.BG_COLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10rem;
  .order-coffee {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 4rem;
    width: clamp(10rem, 20rem, 30rem);
    font-size: clamp(1rem, 2rem, 3rem);
    font-family: 'Pacifico';
    .icon {
      width: 3rem;
      height: 3rem;
    }
  }
`;
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .logo-icon {
    width: clamp(3rem, 5rem, 20rem);
    height: 100%;
  }
  .text-logo {
    margin-left: 1rem;
    font-size: clamp(1rem, 3rem, 4rem);
    font-weight: normal;
    font-family: 'Pacifico', cursive;
  }
`;
const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .nav-list {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
  }
  .nav-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(5rem, 15rem, 20rem);
    padding: 1rem;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: clamp(1rem, 3rem, 3rem);
  color: ${Colors.HEADING_COLOR};
  font-family: 'Pacifico';
  &.isActive{
    color: #ff7b42;
  }
`;
