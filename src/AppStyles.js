import styled from "styled-components";

export const Logo = styled.img`
  position: fixed;
  right: 80px;
  top: 50px;
  width: 180px;
  z-index: 10;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: #000;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8%;
  background-color: #000;
`;
