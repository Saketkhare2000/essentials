import React from 'react';
import styled from 'styled-components';
import Illust from '../images/ill.svg';
function Header() {
  return (
    <Cover>
      <Card>
        <p>
          easily <span>download</span> all the <br />
          essential software in
          <br />
          <span> one click</span>
        </p>
        <img src={Illust} alt="illustration" />
      </Card>
    </Cover>
  );
}
const Cover = styled.div`
  display: grid;
  width: 100%;
`;

const Card = styled.div`
  font-family: 'montserrat', sans-serif;
  background: #393b41;
  margin: 4rem 20rem;
  display: flex;
  width: 80%;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 22px;
  justify-content: space-around;
  width: 80%;
  /* padding: 0rem; */
  justify-self: center;
  @media (max-width: 1008px) {
    margin: 4rem 0rem;
    flex-direction: column;
    width: 80%;
    /* padding: 0rem; */
    justify-self: center;
  }
  p {
    font-variant: small-caps;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 28px;
    color: #00ff97;
    span {
      font-weight: 700;
    }
  }
`;
export default Header;
