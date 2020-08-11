import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';

// import { Container } from './styles';

function Percentage({ value }) {
  const [prev, setPrev] = useState(value);

  useEffect(() => {
    if (prev < value) {
      setPrev(value);
    }
  }, [value]);

  return (
    <>
      <CountUp
        start={prev}
        end={value}
        duration={0.6}
        decimals={2}
        suffix="%"
        decimal=","
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef}>%</span>
          </div>
        )}
      </CountUp>
    </>
  );
}

export default Percentage;
