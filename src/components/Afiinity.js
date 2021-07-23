import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';
import ad from '../images/ad.png';
import ap from '../images/ap.png';
import aph from '../images/aph.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import wave from '../images/wave.svg';
import dots from '../images/dots.svg';
function Affinity() {
  const cardInfo = [
    {
      name: 'affinity designer',
      cover: ad,
      desc:
        'Affinity Designer is a vector graphics editor developed by Serif for macOS, iPadOS, and Microsoft Windows. It is part of the "Affinity trinity" alongside Affinity Photo and Affinity Publisher ',
      link:
        'https://getintopc.com/softwares/photo-retouching/serif-affinity-designer-2020-free-download/',
    },
    {
      name: 'Affinity Photo',
      cover: aph,
      desc:
        'Affinity Photo has become the first choice for photography and creative professionals around the world, who love its speed, power and precision.',
      link:
        'https://getintopc.com/softwares/photo-editing/serif-affinity-photo-2021-free-download/',
    },
    {
      name: 'Affinity Publisher',
      cover: ap,
      desc:
        'Affinity Publisher is a desktop publishing application developed by Serif for macOS and Microsoft Windows, with an iPadOS version planned for release in 2020',
      link:
        'https://getintopc.com/softwares/design/serif-affinity-publisher-2021-free-download/',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card key={index}>
        <img src={card.cover} alt="" />
        <h1>{card.name}</h1>
        <p>{card.desc}</p>
        <button>
          <a href={card.link} target="_blank">
            download
          </a>
        </button>
      </Card>
    );
  };

  return (
    <div>
      <h1
        style={{
          color: '#E7E7DF',
          fontFamily: 'montserrat',
          textTransform: 'uppercase',
          margin: '3rem 0rem',
          textAlign: 'center',
        }}>
        softwares from Affinity
      </h1>
      <Card_deck>{cardInfo.map(renderCard)}</Card_deck>
      <Wave src={wave} alt="wave" />
      <Dots src={dots} alt="" />
    </div>
  );
}
const Dots = styled.img`
  position: absolute;
  top: 140%;
  right: 0%;
  z-index: 1;
`;
const Wave = styled.img`
  position: absolute;
  width: 100%;
  top: 160%;
  z-index: -1;
`;
const Card_deck = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;
const Card = styled.div`
  background: #393b41;
  margin-top: 1rem;
  justify-self: center;
  border-radius: 22px;
  object-fit: contain;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  width: 300px;
  height: 406px;
  position: relative;
  img {
    height: 184px;
  }
  h1 {
    font-family: 'montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #e6e6e6;
    padding: 1rem 0.5rem 1rem 0.5rem;
    font-weight: 700;
  }
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 151%;
    text-transform: lowercase;
    color: rgba(229, 229, 229, 0.5);
    padding: 0rem 0.5rem 2rem 0.5rem;
  }
  button {
    all: unset;
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%, -5%);
    width: 261px;
    height: 33px;
    background: #00ff97;
    border-radius: 20px;
    cursor: pointer;
    a {
      all: unset;
      position: absolute;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 151%;
      /* or 18px */
      left: 50%;
      bottom: 15%;
      transform: translate(-50%, -15%);
      text-transform: uppercase;

      color: #202124;
    }
  }
`;

export default Affinity;
