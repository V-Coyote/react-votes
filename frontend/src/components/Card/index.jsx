import React from 'react';

import Candidate from '../Candidate/';

import { Container, CardInfo, Position } from './styles';

export default function Card({ candidates, position }) {
  const { id, name, votes, percentage, popularity } = candidates;

  return (
    <>
      <Container>
        <CardInfo>
          <Position>{position + 1}</Position>
          <Candidate
            id={id}
            name={name}
            votes={votes}
            percentage={percentage}
            popularity={popularity}
          />
        </CardInfo>
      </Container>
    </>
  );
}
