import React, { useState } from 'react';
import styled from 'styled-components';
import data from '../data';
import ai from '../images/ai.jpg';
import ps from '../images/ps.jpg';
import pr from '../images/pr.jpg';
import wave from '../images/wave.svg';
import dots from '../images/dots.svg';
import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import './cards.scss';
import 'swiper/components/navigation/navigation.scss';

function Adobe() {
  const cardInfo = [
    {
      name: 'Adobe Photoshop 2021',
      cover: ps,
      desc: 'Create Beautiful Images, Graphics, Paintings, And 3D Artwork On Your Desktop And iPad. ',
      link: 'https://getintopc.com/softwares/photo-editing/adobe-photoshop-2021-free-download/',
    },
    {
      name: 'Adobe Illustrator 2021',
      cover: ai,
      desc: 'Adobe Illustrator is a vector graphics editor and design program developed and marketed by Adobe Inc.',
      link: 'https://getintopc.com/softwares/designing-tool/adobe-illustrator-cc-2021-free-download-3462887/',
    },
    {
      name: 'Adobe Premier Pro 2021',
      cover: pr,
      desc: 'Premiere Pro is the industry-leading video editing software for film, TV and the web. ',
      link: 'https://getintopc.com/softwares/video-editing/adobe-premiere-pro-cc-2021-free-download-1625594/',
    },
    {
      name: 'Adobe Xd',
      cover:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png',
      desc: 'Seamless collaboration across every step of the design process. Download for free today. Work together with your team in real-time to create amazing experiences.',
      link: 'https://getintopc.com/softwares/video-editing/adobe-premiere-pro-cc-2021-free-download-1625594/',
    },
    {
      name: 'Adobe Premier Pro 2021',
      cover: pr,
      desc: 'Premiere Pro is the industry-leading video editing software for film, TV and the web. ',
      link: 'https://getintopc.com/softwares/video-editing/adobe-premiere-pro-cc-2021-free-download-1625594/',
    },
  ];

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
        softwares from adobe
      </h1>
      <Card_deck
        className="card_deck"
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {cardInfo.map((card, index) => (
          <Card className="card" key={index}>
            <img src={card.cover} alt="" />
            <h1>{card.name}</h1>
            <p>{card.desc}</p>
            <button>
              <a href={card.link} target="_blank">
                download
              </a>
            </button>
          </Card>
        ))}
      </Card_deck>

      <Dots src={dots} alt="" />
      <Wave src={wave} alt="wave" />
    </div>
  );
}

const Dots = styled.img`
  position: absolute;
  top: 50%;
  right: 0%;
  z-index: -1;
`;

const Wave = styled.img`
  position: absolute;
  width: 100%;
  top: 80%;
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
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  object-fit: contain;
  justify-self: center;
  overflow: hidden;
  width: 300px;
  height: 406px;
  z-index: 10;
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
    padding: 1rem 0.5rem 2rem 0.5rem;
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

export default Adobe;
