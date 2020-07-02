import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import InfoContent from './../../components/InfoContent';
import SchemaContent from './../../components/SchemaContent';
import BackImg from './../../assets/img/image.jpg';
import Rating from './../../components/Rating';
import Tab from './../../components/Tab';
import data from './../../data/data.json';
import ArrowImg from './../../assets/img/arrow-left-white.svg';
import HeartImg from './../../assets/img/heart.svg';

const Hero = styled.div`
  width: 100%;
  height: 250px;
  background: url(${BackImg}) no-repeat center;
  background-size: cover;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 16px;
  background: linear-gradient(transparent 0%, transparent 50%, black 100%);
`;
const Name = styled.div`
  color: white;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: -0.15px;
  text-align: left;
  margin-top: auto;
`;
const HeaderButton = styled.img`
  cursor: pointer;
  &:hover,
  &:active {
    opacity: 0.7;
  }
`;
const Span = styled.div`
  background: #f9f9f9;
  height: 20px;
`;
const tabs = ['Info', 'Schema'];
export default function SalonView({}) {
  let { id } = useParams();
  let info = data.filter((d) => d.id == id)[0];

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <div>
      <Hero>
        <Overlay>
          <div className="d-flex justify-content-between">
            <Link to="/">
              <HeaderButton src={ArrowImg} />
            </Link>
            <HeaderButton src={HeartImg} />
          </div>
          <Name>{info.name}</Name>
          <Rating {...info} type={1} />
        </Overlay>
      </Hero>
      <Tab
        data={tabs}
        current={currentTab}
        onChange={(active) => setCurrentTab(active)}
      ></Tab>
      <Span></Span>
      {currentTab == tabs[0] ? (
        <InfoContent {...info} />
      ) : (
        <SchemaContent {...info} />
      )}
    </div>
  );
}
