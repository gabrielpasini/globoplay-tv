import React, { useEffect, useState } from "react";
import { Container, Button } from "./styles";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsBroadcast, BsCollectionFill } from "react-icons/bs";

const Menu = ({
  keyPressed,
  setKeyPressed,
  menuActive,
  setMenuActive,
  setFeaturedActive,
  setRailActive,
  option,
}) => {
  const [menuItems, setMenuItems] = useState([
    { label: "Busca", icon: <FaSearch />, selected: false, focused: false },
    {
      label: "Início",
      icon: <AiFillHome />,
      selected: true,
      focused: true,
    },
    {
      label: "Agora na Globo",
      icon: <BsBroadcast />,
      selected: false,
      focused: false,
    },
    {
      label: "Categorias",
      icon: <BsCollectionFill />,
      selected: false,
      focused: false,
    },
    {
      label: "Minha conta",
      icon: <FaUserCircle />,
      selected: false,
      focused: false,
    },
  ]);

  useEffect(() => {
    const newItems = [...menuItems];
    if (menuActive) {
      const selectedtem = menuItems.find((item) => item.selected);
      newItems[menuItems.indexOf(selectedtem)].focused = true;
    } else {
      const focusedItem = menuItems.find((item) => item.focused);
      newItems[menuItems.indexOf(focusedItem)].focused = false;
      newItems[menuItems.indexOf(focusedItem)].selected = true;
    }
    setMenuItems(newItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuActive]);

  useEffect(() => {
    if (
      menuActive &&
      (keyPressed === "ArrowUp" ||
        keyPressed === "ArrowDown" ||
        keyPressed === "ArrowRight")
    ) {
      const newItems = [...menuItems];
      const focusedItem = menuItems.find((item) => item.focused);
      const itemIndex = menuItems.indexOf(focusedItem);
      switch (keyPressed) {
        case "ArrowUp":
          if (itemIndex > 0) {
            newItems[itemIndex].focused = false;
            newItems[itemIndex].selected = false;
            newItems[itemIndex - 1].focused = true;
            newItems[itemIndex - 1].selected = true;
            setMenuItems(newItems);
          }
          break;
        case "ArrowDown":
          if (itemIndex + 1 < newItems.length) {
            newItems[itemIndex].focused = false;
            newItems[itemIndex].selected = false;
            newItems[itemIndex + 1].focused = true;
            newItems[itemIndex + 1].selected = true;
            setMenuItems(newItems);
          }
          break;
        case "ArrowRight":
          setMenuActive(false);
          switch (option) {
            case "featured":
              setFeaturedActive(true);
              break;
            case "rail":
              setRailActive(true);
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
      setKeyPressed(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyPressed]);

  return (
    <Container active={menuActive}>
      {menuItems.length > 0 &&
        menuItems.map((item, index) => (
          <Button
            key={index}
            selected={item.selected}
            active={menuActive}
            focused={item.focused}
          >
            <span>{item.icon}</span>
            <p>{item.label}</p>
          </Button>
        ))}
    </Container>
  );
};

export default Menu;
