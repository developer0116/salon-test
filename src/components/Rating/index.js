import React from 'react';
import styled from 'styled-components';
import Rating from 'react-rating';
import StarFullImg from './../../assets/img/star-full.svg';
import StarEmptyImg from './../../assets/img/star-white.svg';

const Container = styled.div`
  display: flex;
`;
const Vote = styled.div`
  color: #656565;
  font-size: 11px;
  margin-left: 8px;
`;
const Star = styled.img`
  width: 9px;
  height: 9px;
  margin-right: 3px;
`;
const FullStar = styled(Star)`
  background: url(${StarFullImg}) no-repeat center;
`;
const EmptyStar = styled(Star)`
  background: url(${StarEmptyImg}) no-repeat center;
`;
export default function _Rating({ rating, vote, type }) {
  return (
    <Container>
      <Rating
        readonly={true}
        placeholderRating={rating}
        emptySymbol={<Star src={StarEmptyImg} />}
        fullSymbol={<Star src={StarFullImg} />}
        placeholderSymbol={<Star src={StarFullImg} />}
      />
      <Vote>{`(${vote})`}</Vote>
    </Container>
  );
}
