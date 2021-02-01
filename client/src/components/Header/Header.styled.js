import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';

export const StyledHeader = styled.header`
  height: 6vh;
  width: 100%;
  display: flex;
  margin: auto;
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
`;

export const StyledWrapper = styled.div`
  padding: 0 48px;
  width: 80%;
  margin: auto;
`;

export const StyledInnerHeader = styled.div`
  position: relative;
  z-index: 10;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.div`
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: ${greenColor};
`;

export const StyledMenu = styled.div`
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 0.8rem;
    mix-blend-mode: difference;

    a {
      color: ${greenColor};
    }
  }
`;