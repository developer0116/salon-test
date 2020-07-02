import React from 'react';
import styled from 'styled-components';
import PinImg from './../../assets/img/pin.png';
import ClockImg from './../../assets/img/clock.png';
import PhoneImg from './../../assets/img/phone.png';
import GlobeImg from './../../assets/img/globe.png';
import ArrowImg from './../../assets/img/arrow-down.svg';

const Container = styled.div`
  padding: 0 15px;
  text-align: left;
`;
const Item = styled.div`
  height: 45px;
  border-bottom: 0.5px solid #eeeeee;
  padding: 13px 0;
  font-size: 15px;
  color: #202020;
  text-align: left;
  span {
    margin: 0 14px;
  }
  img:last-child {
    margin-top: -4px;
  }
  img:first-child {
    object-fit: contain;
    width: 16px;
    height: 16px;
  }
`;
const Content = styled.div`
  padding-top: 20px;
  color: #2b2b2b;
  font-size: 15px;
`;
export default function InfoContent({
  address,
  openTime,
  phone,
  website,
  description,
}) {
  return (
    <Container>
      <Item>
        <img src={PinImg} />
        <span>{address}</span>
      </Item>
      <Item>
        <img src={ClockImg} />
        <span>{openTime}</span>
        <img src={ArrowImg} />
      </Item>
      <Item>
        <img src={PhoneImg} />
        <span>{phone}</span>
      </Item>
      <Item>
        <img src={GlobeImg} />
        <span>{website}</span>
      </Item>
      <Content>{description}</Content>
    </Container>
  );
}
