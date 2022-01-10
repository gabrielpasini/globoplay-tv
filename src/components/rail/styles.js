import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: fixed;
  left: 8%;
  bottom: 0;
  ${(props) =>
    props.active
      ? `height: 100%;  opacity: 1; background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));`
      : `height: 300px; opacity: 0.5; background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1));`}
`;

export const BackgroundImage = styled.img`
  position: fixed;
  width: 100%;
  height: 100%;
  ${(props) =>
    props.active
      ? `mask-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1));`
      : "opacity: 0;"}
`;

export const FocusedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
  ${(props) => (!props.active ? "height: 0; opacity: 0;" : "height: 100%;")}
`;

export const Header = styled.span`
  margin: 100px 0 20px 80px;
  font-size: 24px;
  color: #ccc;
  font-weight: bold;
`;

export const FocusedTitle = styled.span`
  margin: 40px 0 300px 80px;
  font-size: 36px;
  color: #fff;
  font-weight: bold;
`;

export const Title = styled.span`
  margin: 30px 0 60px 80px;
  font-size: 26px;
  font-weight: bold;
  color: #ccc;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100%;
  z-index: 1;
  ${(props) => {
    let value = 80;
    if (props.index > 0) {
      value = value - props.index * 348;
    }
    return `margin-left: ${value}px;`;
  }}
  transition: all 0.5s ease-in-out;
`;

export const Camera = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${(props) =>
    props.focused
      ? `border: 4px solid #fff; justify-content: center;`
      : `justify-content: flex-end; margin: 4px;`}
  width: 320px;
  height: 180px;
  margin-right: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9));
  transition: all 0.5s ease-in-out;
  p {
    color: #ccc;
    margin: 0 0 6px 10px;
    font-size: 20px;
  }
  span {
    color: #fff;
    margin: 0 0 14px 10px;
    font-size: 20px;
    font-weight: bold;
  }
  div {
    position: fixed;
    align-self: center;
    color: #fff;
    svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const Thumb = styled.img`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  ${(props) => !props.focused && "margin-bottom: -74px;"}
`;
