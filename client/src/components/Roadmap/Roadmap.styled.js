import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';

export const Container = styled.div`
  width: 100%;
  height: 320vh;
  display: flex;
  justify-content: center;

  p {
    margin-top: 10rem;
    font-size: 1.2rem;
  }
`;

export const Tracer = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 5px solid ${blackColor};
  background-color: white;
  position: fixed;
  margin-top: 50vh;
  /* transform: translate(-50%, -50%); */
`;

export const Line = styled.div`
  margin-top: 50vh;
  width: 5px;
  height: 220vh;
  position: absolute;
  background-color: ${greenColor};
  /* transform: translate(-50%, -50%); */
`;

export const Legend = styled.div`
  width: 120px;
  height: 90px;
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 25%;
  box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.3);

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const Round1 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${greenColor};
  margin-right: .5rem;
`;

export const Round2 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: orange;
  margin-right: .5rem;
`;

export const Round3 = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: grey;
  margin-right: .5rem;
`;



export const Fundamentals = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  top: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 5px;
    color: ${blackColor};
  }
`;

export const Advanced = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  top: 160vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 5px;
    color: ${blackColor};
  }
`;

export const Ecosystem = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  top: 210vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    padding: 5px;
    color: ${blackColor};
  }
`;

export const Data = styled.div`
  width: ${props => props.index === 12 ? "150px" : props.index === 13 ? "150px" : "220px" };
  height: 50px;
  background-color: ${props => props.status === "Done" ? greenColor : props.status === "Pending" ? "orange" : props.status === "Todo" ? "grey" : "red" };
  position: absolute;
  transform: ${props => props.x && props.y ? `translate(${props.x}, ${props.y})` : null};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  border: 2px solid black;
`;

export const FundamentalsContainer = styled.div`
  height: 600px;
  margin-top: 80vh;
  opacity: 0;
  position: absolute;
`;

export const AdvancedContainer = styled.div`
  height: 600px;
  margin-top: 150vh;
  position: absolute;
  opacity: 0;
`;

export const EcosystemContainer = styled.div`
  height: 600px;
  margin-top: 200vh;
  position: absolute;
  opacity: 0;
`;
