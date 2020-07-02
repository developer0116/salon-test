import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;
const Item = styled.div`
  width: ${(props) => 100 / props.length}%;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 50px;
  background: white;
  color: #202020;
  cursor: pointer;
  transition: all 300ms ease-in;
  border-bottom: ${(props) => (props.active ? '2px solid #b69f58' : 'none')};
  &:hover,
  &:active {
    font-weight: 700;
  }
`;
export default function Tab({ data, current, onChange }) {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Item
            key={item}
            active={current == item}
            onClick={() => onChange(item)}
            length={data.length}
          >
            {item}
          </Item>
        );
      })}
    </Container>
  );
}
