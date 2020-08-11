import React from 'react';
import FlipMove from 'react-flip-move';

import { Container } from './styles';

import Card from '../Card/';

export default function Candidates({ candidates }) {
  return (
    <>
      <Container>
        <FlipMove>
          {candidates.map((candidate, index) => {
            return (
              <div key={candidate.id} style={{ padding: 8 }}>
                <Card
                  key={candidates.id}
                  candidates={candidate}
                  position={index}
                />
              </div>
            );
          })}
        </FlipMove>
      </Container>
    </>
  );
}
