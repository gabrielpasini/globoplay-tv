import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import {
  Container,
  ContentContainer,
  Background,
  Logo,
  Text,
  ButtonsContainer,
  Button,
} from "./styles";
import LogoBBB from "../../images/BBB-logo.png";
import BackgroundBBB from "../../images/BBB-wallpaper.jpg";

const Featured = ({
  keyPressed,
  setKeyPressed,
  featuredActive,
  setMenuActive,
  setFeaturedActive,
  setRailActive,
  option,
}) => {
  const [itemFocused, setItemFocused] = useState("watch");

  useEffect(() => {
    if (
      featuredActive &&
      (keyPressed === "ArrowDown" ||
        keyPressed === "ArrowRight" ||
        keyPressed === "ArrowLeft")
    ) {
      switch (keyPressed) {
        case "ArrowLeft":
          if (itemFocused === "watch") {
            setFeaturedActive(false);
            setMenuActive(true);
          } else {
            setItemFocused("watch");
          }
          break;
        case "ArrowRight":
          if (itemFocused === "watch") {
            setItemFocused("seeMore");
          }
          break;
        case "ArrowDown":
          setFeaturedActive(false);
          setRailActive(true);
          break;
        default:
          break;
      }
      setKeyPressed("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);

  return (
    <>
      <Container active={option === "featured"}>
        <Background src={BackgroundBBB} active={option === "featured"} />
        <ContentContainer>
          <Logo src={LogoBBB} />
          <Text>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Text>
          <ButtonsContainer>
            <Button
              focused={itemFocused === "watch" && featuredActive}
              showIcon={true}
            >
              <FaPlay />
              Assista
            </Button>
            <Button focused={itemFocused === "seeMore" && featuredActive}>
              Veja mais
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Featured;
