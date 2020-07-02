import React, { useState, useEffect } from 'react';
import Header from './../../components/Header';
import Dropdown from './../../components/Dropdown';
import styled from 'styled-components';
import Item from './item';
import data from './../../data/data.json';
const Content = styled.div`
  overflow: auto;
  max-height: calc(100vh - 120px);
  margin-bottom: 12px;
`;
const filterData = [
  [0, 250],
  [250, 500],
  [500, 750],
  [750, 1000],
  [1000, 1250],
];
export default function ListView() {
  const [currentRange, setCurrentRange] = useState(null);
  useEffect(() => {
    console.log('data', data);
    return () => {};
  }, []);
  const handleChangeFilter = (item) => {
    setCurrentRange(item);
  };
  return (
    <div>
      <Header title={'Hår'} />
      <Dropdown
        data={filterData}
        placeholder={'Please select price range...'}
        current={currentRange}
        onChange={(e) => handleChangeFilter(e)}
      />
      <Content>
        {data
          .filter(
            (d) =>
              !currentRange ||
              (d.price >= currentRange[0] && d.price <= currentRange[1]),
          )
          .map((item, index) => {
            return <Item key={item.id} {...item} />;
          })}
      </Content>
    </div>
  );
}
