import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  height: 100%;
  width: ${(props) => (props.active ? "20%" : "8%")};
  background-color: #000;
  color: #666666;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.5s ease-in-out;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: inherit;
  height: 10%;
  width: 100%;
  font-size: 1.5em;
  transition: all 0.5s ease-in-out;
  ${(props) => props.selected && "color: #fff;"}
  ${(props) => props.focused && `background-color: #fff; color: #000;`}
  & :first-child {
    margin: 0 14px 0 1.4vw;
  }
  ${(props) => !props.active && `p { opacity: 0;}`};
`;
