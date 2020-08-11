import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

// import { Container } from './styles';

function Votes({ value }) {
  const [prev, setPrev] = useState(value);

  useEffect(() => {
    if (prev + 300 < value) {
      setPrev(value);
    }
  }, [value]);

  return (
    <>
      <CountUp start={prev} end={value} duration={0.6} separator=".">
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </>
  );
}

export default Votes;
