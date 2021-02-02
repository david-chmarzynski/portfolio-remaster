import styled from 'styled-components';
import { blackColor, greenColor } from '../../colors';

export const Container = styled.div`
  width: 100%;
  height: 233vh;
  display: flex;
  justify-content: center;

  p {
    margin-top: 50%;
  }
`;

export const Tracer = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 5px solid ${blackColor};
  background-color: white;
  position: fixed;
  margin-top: 50%;
  /* transform: translate(-50%, -50%); */
`;

export const Line = styled.div`
  margin-top: 50%;
  width: 5px;
  height: 140vh;
  position: absolute;
  background-color: ${greenColor};
  /* transform: translate(-50%, -50%); */
`;

export const Fundamentals = styled.div`
  width: 200px;
  height: 50px;
  background-color: white;
  position: absolute;
  /* transform: translate(-50%, -50%); */
  top: 60vh;
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
  top: 100vh;
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
  top: 140vh;
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
`;