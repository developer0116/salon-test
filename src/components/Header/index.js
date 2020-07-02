import React from 'react';
import styled from 'styled-components';
import ArrowLeftImg from './../../assets/img/arrow-left.svg';
import FilterImg from './../../assets/img/filter.svg';
const Container = styled.div`
  height: 60px;
  line-height: 22px;
  padding: 22px 15px 16px 15px;
  color: #202020;
  font-size: 24px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  height: 18px;
  width: 18px;
  background-size: 100% 100%;
  margin-top: auto;
  &:hover,
  &:active {
    opacity: 0.5;
    cursor: pointer;
  }
`;
const Back = styled(Button)`
  background: url(${ArrowLeftImg}) no-repeat center;
`;
const Filter = styled(Button)`
  background: url(${FilterImg}) no-repeat center;
`;
export default function Header({ title }) {
  return (
    <Container>
      <Back />
      <span>{title}</span>
      <Filter />
    </Container>
  );
}
