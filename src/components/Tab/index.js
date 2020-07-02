import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Item = styled.div`
  width: ${(props) => 100 / props.length}+ '%';
  text-align: center;
  font-size: 25px;
  line-height: 50px;
  background: white;
  color: #202020;
  transition: all 300ms ease-in;
  border-bottom: ${(props) => (props.active ? '2px solid #b69f58' : 'none')};
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
          >
            {item}
          </Item>
        );
      })}
    </Container>
  );
}
