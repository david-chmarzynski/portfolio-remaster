import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';

export const StyledHome = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const StyledSecondaryBackground = styled.div`
  background: ${greenColor};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

export const StyledMenuLayer = styled.div`
  position: relative;
  background: ${blackColor};
  height: 100%;
  overflow: hidden;
`;

export const StyledInfoBackground = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: cover;
  background-repeat: no-repeat;
  animation-name: backgroundEffect;
  animation-duration: 30s;
  animation-iteration-count: infinite;

  
@keyframes backgroundEffect {
  0% {
    background-position: 0% 0%;
  }
  25% {
    background-position: 40% 10%;
  }
  50% {
    background-position: 0 10%;
  }
  75% {
    background-position: 10% 40%;
  }
  100% {
    background-position: 0% 0%;
  }
}
`;

export const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: auto;
`;

export const StyledMenuLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 300px;
`;

export const StyledNav = styled.nav`
  display: block;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const StyledLi = styled.li`
  list-style: none;
  font-size: 6rem;
  font-weight: 700;
  cursor: pointer;
  height: 135px;
  overflow: hidden;
  position: relative;
  width: 700px;

  a {
    position: absolute;
    color: #fff;
    text-decoration: none;
    background: linear-gradient(to top, $black 0%, #FFF 10%, transparent 10.01%) no-repeat left bottom / 0 100%;
    transition: background-size .6s;
  }
    a:hover {
      color: ${greenColor};
      background-size: 100% 100%;
      transition-duration: .4s;
    }
`;

export const StyledInfo = styled.div`
  color: #fff;
  width: 300px;
  
  h3 {
    font-size: 1.2rem;
    margin: 8px auto;
  }

  p {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;

export const StyledProject = styled.div`
  position: absolute;
  bottom: -80px;
  color: #fff;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;

  a {
    cursor: pointer;
    font-weight: 400;
    margin: 0 32px;
    transition: 0.3s ease-in-out;
    color: white;
    text-decoration: none;
  }

  a:first-child {
    margin-left: 64px;
  }

  a:hover {
    color: #fff;
    background: ${greenColor};
    padding: 8px 24px;
    border-radius: 4px;
  }
`;

export const StyledSocials = styled.div`
  position: absolute;
  bottom: -200%;
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 48px;
    height: 48px;
    color: ${greenColor};
  }

  svg:nth-child(1) {
    width: 37px;
    height: 37px;
    margin-right: 1rem;
  }
`;

export const LocalDriveInfo = styled.div`
  color: #fff;
  width: 300px;
  display: none;
  opacity: 0;
  
  h3 {
    font-size: 1.2rem;
    margin: 8px auto;
  }

  p {
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;

export const ChatroomInfo = styled.div`
  color: ${blackColor};
  width: 300px;
  display: none;
  opacity: 0;
  
  h3 {
    color: ${blackColor};
    font-size: 1.2rem;
    margin: 8px auto;
  }

  p {
    color: ${blackColor};
    margin: 0 auto;
    font-size: 0.8rem;
  }
`;