import React from 'react';

import { ComponentHeader, StyledContainerFluid, StyledContainer, ComponentWave, ComponentContentAbout } from '@components';
export const ContainerAbout = () => {
  return (
    <>
      <StyledContainerFluid>
        <StyledContainer>
          <ComponentHeader />
          <ComponentContentAbout/>
          <ComponentWave />
        </StyledContainer>
      </StyledContainerFluid>
    </>
  );
};
