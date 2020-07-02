import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowDownImg from './../../assets/img/arrow-down.svg';

const Main = styled.div`
  padding: 16px 15px;
  font-size: 15px;
  color: #202020;
  text-align: left;
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.isPlaceholder ? 0.7 : 1)};
  border-top: 1px solid #b69f58;
  border-bottom: 1px solid #b69f58;
  cursor: pointer;
`;
const Toggle = styled.div`
  height: 12px;
  width: 12px;
  background-size: 100% 100%;
  background: url(${ArrowDownImg}) no-repeat center;
  margin: auto 0;
  transform: rotate(${(props) => (props.isExpand ? '180deg' : '0')});
  transition: all 300ms ease-in;
`;
const Content = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  background: white;
  overflow: auto;
  transition: all 500ms ease;
  max-height: ${(props) => (props.isExpand ? '100vh' : '0')};
  overflow: hidden;
  border-bottom: 1px solid #b69f58;
  border-width: ${(props) => (props.isExpand ? '1px' : '0px')};
`;
const Item = styled.div`
  padding: 16px 15px;
  font-size: 15px;
  line-height: 15px;
  text-align: left;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover,
  &:active {
    font-weight: 600;
    background-color: #eeeeee;
  }
`;

const Divider = styled.div`
  background: #eeeeee;
  height: 1px;
  margin: 0 15px;
`;
export default function Dropdown({ current, data, placeholder, onChange }) {
  const [isExpand, setIsExpand] = useState(0);
  const handleItemClick = (item) => {
    setIsExpand(0);
    onChange(item);
  };
  return (
    <div>
      <Main
        onClick={() => {
          setIsExpand(1 - isExpand);
        }}
        isPlaceholder={current ? 0 : 1}
      >
        <span>
          {current ? `Pris ${current[0]} - ${current[1]} kr` : placeholder}
        </span>
        <Toggle isExpand={isExpand} />
      </Main>
      <Content isExpand={isExpand}>
        <Item onClick={() => handleItemClick(null)}>Select All</Item>
        <Divider />
        {data.map((item, index) => {
          return (
            <React.Fragment key={`item${index}`}>
              <Item
                onClick={() => handleItemClick(item)}
              >{`Pris ${item[0]} - ${item[1]} kr`}</Item>
              <Divider />
            </React.Fragment>
          );
        })}
      </Content>
    </div>
  );
}
