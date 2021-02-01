import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';

export const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  padding: 0 48px;
`;

export const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  p {
    font-size: 0.75rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-weight: 500;
  }

  h5 {
    margin-top: 260px;
    font-size: 24px;
    font-weight: 600;
    padding-right: 360px;
  }
`;