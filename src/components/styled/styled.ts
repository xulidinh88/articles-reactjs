import styled from 'styled-components';

import { Colors } from '@enums';

export const StyledContainerFluid = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;

  background-color: ${Colors.BG_COLOR};
`;
export const StyledContainer = styled.div`
  width: 80%;
  overflow: hidden;
`;

export const StyledFlex = styled.div<{ alignItems: string; justifyContent: string; width: string }>`
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  width: ${(props) => props.width};
  height: 100%;
`;
