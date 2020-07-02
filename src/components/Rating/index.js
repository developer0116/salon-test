import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import StarFullImg from './../../assets/img/star-full.svg';
import StarEmptyImg from './../../assets/img/star-white.svg';

const Container = styled.div`
  display: flex;
`;
const Vote = styled.div`
  color: ${(props) => (props.type ? 'white' : '#656565')};
  font-size: ${(props) => (props.type ? '13px' : '11px')};
  line-height: ${(props) => (props.type ? '25px' : '30px')};
  margin-left: 6px;
`;
const Star = styled.img`
  width: ${(props) => (props ? '12px' : '9px')};
  height: ${(props) => (props ? '12px' : '9px')};
  margin-right: ${(props) => (props ? '6px' : '4px')};
`;
export default function _Rating({ rating, vote, type = 0 }) {
  return (
    <Container>
      <Rating
        readonly={true}
        placeholderRating={rating}
        emptySymbol={<Star src={StarEmptyImg} type={type} />}
        fullSymbol={<Star src={StarFullImg} type={type} />}
        placeholderSymbol={<Star src={StarFullImg} type={type} />}
      />
      <Vote type={type}>{`(${vote})`}</Vote>
    </Container>
  );
}
