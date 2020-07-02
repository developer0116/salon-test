import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import BackImg from './../../assets/img/image.jpg';
import Rating from './../../components/Rating';
import Tab from './../../components/Tab';
import data from './../../data/data.json';

const Hero = styled.div`
  width: 100%;
  height: 250px;
  background: url(${BackImg}) no-repeat center;
  background-size: cover;
  position: relative;
`;
const Overlay = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  height: calc(100% - 30px);
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
const tabs = ['Info', 'Schema'];
export default function SalonView({}) {
  let { id } = useParams();
  let info = data.filter((d) => d.id == id)[0];

  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <div>
      <Hero>
        <Overlay>
          <Name>{info.name}</Name>
          <Rating {...info} type={1} />
        </Overlay>
      </Hero>
      <Tab active={currentTab} onChange={(active) => setCurrentTab(active)}>
        {tabs.map((tab) => {
          return <div key={tab}>{tab}</div>;
        })}
      </Tab>
    </div>
  );
}
