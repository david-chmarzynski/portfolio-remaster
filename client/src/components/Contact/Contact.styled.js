import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';
import image from '../../images/contact-back.jpg';

export const Container = styled.div`
  width: 50%;
  height: 50vh;
  background-color: ${blackColor};
  border-radius: 20px;
  margin-top: 10rem;
  display: flex;
`;

export const Left = styled.div`
  width: 58%;
  height: 100%;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  
  p {
    margin: 1rem auto;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const StyledContact = styled.div`
  width: 42%;
  height: 100%;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  position: relative;
`;

export const StyledFormContainer = styled.div`
  width: 100%;
  height: 100%;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  height: 70%;
  margin: auto;

  button {
    border: 1px solid black;
    border-radius: 50px;
    background-color: transparent;
    max-width: 90%;
    padding: 5px 10px;
    align-self: center;
    font-weight: 800;
  }

  button:hover {
    border: 1px solid white;
    color: white;
  }

  button:focus {
    border: 1px solid white;
    outline: none;
  }
`;

export const Phone = styled.div`
  max-width: 20%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding-left: 50px;
  margin-top: 2rem;

  span {
    color: white;
    margin-left: 1rem;
  }

  svg {
    color: white;
  }
`;

export const Email = styled.div`
  max-width: 58%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 2rem;
  padding-left: 50px;

  a {
    color: white;
    margin-left: 1rem;
  }

  svg {
    color: white;
  }
`;

export const Round = styled.div`
  height: 45px;
  width: 45px;
  position: absolute;
  top: 50%;
  left: -4%;
  border-radius: 50%;
  background-color: ${greenColor};
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;