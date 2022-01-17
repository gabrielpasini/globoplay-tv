import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: fixed;
  ${(props) => !props.active && "opacity: 0;"}
  z-index: -1;
  background-color: #000;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
  transition: all 0.5s ease-in-out;
`;

export const Background = styled.img`
  z-index: 1;
  ${(props) => !props.active && "opacity: 0;"}
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  transition: all 0.5s ease-in-out;
`;

export const Logo = styled.img`
  width: 500px;
  margin-top: 100px;
`;

export const Text = styled.span`
  font-size: 32px;
  color: #fff;
  width: 550px;
  margin-left: 80px;
  margin-bottom: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  height: 70px;
  width: 220px;
  background: none;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  margin: 20px;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.showIcon &&
    `& :first-child {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }`}
  ${(props) =>
    props.focused &&
    `background-color: #fff; color: #000; transform: scale(1.1);`}
`;
