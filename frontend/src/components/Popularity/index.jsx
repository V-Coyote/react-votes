import React from 'react';

import { Stars } from './styles';

const MAX_STARS = 10;

const STARS = {
  full: '★',
  empty: '☆',
};

function Popularity({ value }) {
  const fullStars = STARS.full.repeat(value);
  const emptyStars = STARS.empty.repeat(MAX_STARS - value);

  return (
    <>
      <Stars>
        <p className="yellow-text text-darken-2">{`${fullStars}${emptyStars}`}</p>
      </Stars>
    </>
  );
}

export default Popularity;
