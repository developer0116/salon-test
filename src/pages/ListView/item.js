import React from 'react';
import styled from 'styled-components';
import Rating from './../../components/Rating';
import ArrowRightImg from './../../assets/img/arrow-right.svg';
import { Link } from 'react-router-dom';
const Container = styled(Link)`
  /* margin: 0px 15px; */
  padding: 16px 15px;
  display: flex;
  font-size: 15px;
  line-height: 29px;
  color: #202020;
  text-align: left;
  cursor: pointer;
  transition: all 300ms ease-in;
  text-decoration: none;
  &:hover,
  &:active {
    background-color: #eeeeee;
    text-decoration: none;
  }
`;
const Divider = styled.div`
  background: #eeeeee;
  height: 1px;
  margin: 0 15px;
`;
const Main = styled.div`
  margin-left: 15px;
  margin-right: auto;
`;
const Name = styled.div`
  font-size: 20px;
  line-height: 29px;
  font-weight: 400;
  color: #202020;
  font-family: 'MillerBanner-Light';
`;
const Address = styled.div`
  font-size: 15px;
  color: #666666;
`;
const Time = styled.div`
  color: #666666;
  font-size: 13px;
`;
const Arrow = styled.div`
  width: 9px;
  background: url(${ArrowRightImg}) no-repeat center;
  background-size: 100%;
  margin-left: 30px;
`;
const Value = styled.div`
  font-size: 15px;
  color: #202020;
  font-weight: 500;
  line-height: 26px;
`;
export default function Item({
  name,
  rating,
  price,
  time,
  vote,
  address,
  value,
  id,
}) {
  return (
    <React.Fragment>
      <Container to={`/salon/${id}`}>
        <Value>{parseFloat(value).toFixed(2)}</Value>
        <Main>
          <Name>{name}</Name>
          <Rating rating={rating} vote={vote} type={0} />
          <Address>{address.split(',')[0]}</Address>
        </Main>
        <div>
          <Value>{`${price} kr`}</Value>
          <Time>{time}</Time>
        </div>
        <Arrow />
      </Container>
      <Divider />
    </React.Fragment>
  );
}
