import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import {
  Container,
  BackgroundImage,
  FocusedContainer,
  Header,
  FocusedTitle,
  Title,
  ContentContainer,
  Camera,
  Thumb,
} from "./styles";
import BBB_1 from "../../images/BBB1.png";
import BBB_2 from "../../images/BBB2.jpg";

const initialItems = [
  {
    label: "Sala de estar",
    category: "Realities",
    thumbnail: BBB_1,
    background: BBB_1,
    focused: false,
    selected: true,
  },
  {
    label: "Varanda",
    category: "Realities",
    thumbnail: BBB_2,
    background: BBB_2,
    focused: false,
    selected: false,
  },
  {
    label: "Piscina",
    category: "Realities",
    thumbnail: BBB_1,
    background: BBB_1,
    focused: false,
    selected: false,
  },
  {
    label: "Academia",
    category: "Realities",
    thumbnail: BBB_2,
    background: BBB_2,
    focused: false,
    selected: false,
  },
  {
    label: "Chuveiro",
    category: "Realities",
    thumbnail: BBB_1,
    background: BBB_1,
    focused: false,
    selected: false,
  },
];

const Rail = ({
  keyPressed,
  setKeyPressed,
  railActive,
  setMenuActive,
  setRailActive,
  setFeaturedActive,
  option,
}) => {
  const [cameras, setCameras] = useState(initialItems);
  const [selectedCamera, setSelectedCamera] = useState(null);

  useEffect(() => {
    if (!selectedCamera) {
      const focused = cameras.find(
        (camera) => camera.focused || camera.selected
      );
      setSelectedCamera(focused);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameras]);

  useEffect(() => {
    const newCameras = [...cameras];
    if (railActive) {
      const selected = cameras.find((camera) => camera.selected);
      newCameras[newCameras.indexOf(selected)].focused = true;
    } else {
      newCameras.forEach((camera) => {
        camera.focused = false;
        return camera;
      });
    }
    setCameras(newCameras);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [railActive]);

  useEffect(() => {
    if (
      railActive &&
      (keyPressed === "ArrowUp" ||
        keyPressed === "ArrowRight" ||
        keyPressed === "ArrowLeft")
    ) {
      const newCameras = [...cameras];
      const selectedIndex = cameras.indexOf(selectedCamera);
      switch (keyPressed) {
        case "ArrowLeft":
          if (selectedIndex === 0) {
            setMenuActive(true);
            setRailActive(false);
          } else if (selectedIndex > 0) {
            newCameras[selectedIndex].selected = false;
            newCameras[selectedIndex].focused = false;
            newCameras[selectedIndex - 1].selected = true;
            newCameras[selectedIndex - 1].focused = true;
          }
          setSelectedCamera(newCameras[selectedIndex - 1]);
          setCameras(newCameras);
          break;
        case "ArrowRight":
          if (selectedIndex + 1 < newCameras.length) {
            newCameras[selectedIndex].selected = false;
            newCameras[selectedIndex].focused = false;
            newCameras[selectedIndex + 1].selected = true;
            newCameras[selectedIndex + 1].focused = true;
          }
          setSelectedCamera(newCameras[selectedIndex + 1]);
          setCameras(newCameras);
          break;
        case "ArrowUp":
          setFeaturedActive(true);
          setRailActive(false);
          break;
        default:
          break;
      }
      setKeyPressed("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);

  return (
    <Container active={!!(option === "rail")}>
      <BackgroundImage
        src={selectedCamera?.background}
        active={!!(option === "rail")}
      />
      <FocusedContainer active={!!(option === "rail")}>
        <Header>Big Brother Brasil</Header>
        <FocusedTitle>{selectedCamera?.label}</FocusedTitle>
      </FocusedContainer>
      <Title>Agora no BBB</Title>
      <ContentContainer
        index={cameras.indexOf(selectedCamera)}
        active={!!(option === "rail")}
      >
        {cameras.map((camera, index) => (
          <Camera focused={railActive && camera.focused} key={index}>
            <Thumb src={camera.thumbnail} focused={camera.focused} />
            {camera.focused ? (
              <div>
                <FaPlay />
              </div>
            ) : (
              <>
                <p>{camera.category.toUpperCase()}</p>
                <span>{camera.label}</span>
              </>
            )}
          </Camera>
        ))}
      </ContentContainer>
    </Container>
  );
};

export default Rail;
