import React from 'react';
import { MdMenu } from 'react-icons/md';
import styled from 'styled-components';
function Nav() {
  return (
    <nav>
      <Navbar>
        <a href="#">
          <li>Essentials</li>
        </a>
      </Navbar>
    </nav>
  );
}

const Navbar = styled.div`
  background: #393b41;
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 2rem 12rem;
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  color: #e7e7df;
  a {
    text-decoration: none;
    color: #e7e7df;
  }
`;

export default Nav;
