import React, { useState, useEffect } from "react";
import { Logo, Container, ContentContainer } from "./AppStyles";
import Menu from "./components/menu";
import Featured from "./components/featured";
import Rail from "./components/rail";
import LogoGloboPlay from "./images/globoplay-logo.png";

function App() {
  const [keyPressed, setKeyPressed] = useState(null);
  const [menuActive, setMenuActive] = useState(false);
  const [featuredActive, setFeaturedActive] = useState(true);
  const [railActive, setRailActive] = useState(false);
  const [option, setOption] = useState("featured");

  useEffect(() => {
    if (featuredActive && !railActive) setOption("featured");
    if (railActive && !featuredActive) setOption("rail");
  }, [featuredActive, railActive]);

  useEffect(() => {
    document.addEventListener("keydown", (event) => setKeyPressed(event.key));
    return document.removeEventListener("keydown", (event) =>
      setKeyPressed(event.key)
    );
  }, []);

  return (
    <Container>
      <Logo src={LogoGloboPlay} />
      <Menu
        keyPressed={keyPressed}
        setKeyPressed={setKeyPressed}
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        setFeaturedActive={setFeaturedActive}
        setRailActive={setRailActive}
        option={option}
      />
      <ContentContainer>
        <Featured
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          menuActive={menuActive}
          featuredActive={featuredActive}
          setFeaturedActive={setFeaturedActive}
          setMenuActive={setMenuActive}
          setRailActive={setRailActive}
          option={option}
        />
        <Rail
          keyPressed={keyPressed}
          setKeyPressed={setKeyPressed}
          menuActive={menuActive}
          railActive={railActive}
          setMenuActive={setMenuActive}
          setRailActive={setRailActive}
          setFeaturedActive={setFeaturedActive}
          option={option}
        />
      </ContentContainer>
    </Container>
  );
}

export default App;
