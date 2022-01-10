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
  const [watchButton, setWatchButton] = useState({
    label: "Assista",
    icon: <FaPlay />,
    focused: true,
  });
  const [seeMoreButton, setSeeMoreButton] = useState({
    label: "Veja mais",
    focused: false,
  });

  useEffect(() => {
    if (
      featuredActive &&
      (keyPressed === "ArrowDown" ||
        keyPressed === "ArrowRight" ||
        keyPressed === "ArrowLeft")
    ) {
      const newWatchButton = watchButton;
      const newSeeMoreButton = seeMoreButton;
      switch (keyPressed) {
        case "ArrowLeft":
          if (watchButton.focused) {
            setFeaturedActive(false);
            setMenuActive(true);
          } else if (seeMoreButton.focused) {
            newSeeMoreButton.focused = false;
            newWatchButton.focused = true;
            setSeeMoreButton(newSeeMoreButton);
            setWatchButton(newWatchButton);
          }
          break;
        case "ArrowRight":
          if (watchButton.focused) {
            newWatchButton.focused = false;
            newSeeMoreButton.focused = true;
            setWatchButton(newWatchButton);
            setSeeMoreButton(newSeeMoreButton);
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
      <Container active={!!(option === "featured")}>
        <Background src={BackgroundBBB} active={!!(option === "featured")} />
        <ContentContainer>
          <Logo src={LogoBBB} />
          <Text>Acompanhe 24h ao vivo a casa mais vigiada do Brasil</Text>
          <ButtonsContainer>
            <Button focused={watchButton.focused} showIcon={!!watchButton.icon}>
              {watchButton.icon}
              {watchButton.label}
            </Button>
            <Button focused={seeMoreButton.focused}>
              {seeMoreButton.label}
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Featured;
