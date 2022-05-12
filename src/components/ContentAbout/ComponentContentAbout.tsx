import React from 'react';
import styled from 'styled-components';

export const ComponentContentAbout = () => {
  return (
    <Wrap>
      <Grid>
        <div className="about-content"></div>
        <div className="about-content"></div>
        <div className="about-content"></div>
        <div className="about-content"></div>
      </Grid>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
`;
const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
  gap: 3rem;
  .about-content {
    min-height: 30rem;
    background-color: #fff;
    border-radius: 0.8rem;
  }
`;
