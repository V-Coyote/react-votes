import React from 'react';

import { formatNumber } from '../../helpers/formatHelpers';

import Popularity from '../Popularity/';
import Votes from '../Votes/';
import Percentage from '../Percentage/';

import { Container, Info } from './styles';

function Candidate({ id, name, votes, percentage, popularity }) {
  return (
    <>
      <Container>
        <img src={require(`../../../public/${id}.png`)} alt={name} />
        <Info>
          <p>{name}</p>
          <Votes value={votes} />
          <Percentage value={percentage} />
          <Popularity value={popularity} />
        </Info>
      </Container>
    </>
  );
}

export default Candidate;
