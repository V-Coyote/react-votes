import React from 'react';

import { Container } from './styles';

export default function Spinner({ description }) {
  return (
    <Container>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-green-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="gap-patch">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div>
        <h5>{description}</h5>
      </div>
    </Container>
  );
}
