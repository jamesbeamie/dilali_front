import React, { useState, useEffect } from "react";
import "../assets/styles/menu.css";

import { appMenu, adminMenu } from "./static/menuList";

const Menu = ({ appMode }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (appMode == "admin") {
      setMenuItems(adminMenu);
    } else {
      setMenuItems(appMenu);
    }
  });
  return (
    <React.Fragment>
      {menuItems.map((menu) => (
        <div
          onClick={() => setSelected(menu.id)}
          className={`${selected == menu.id ? "menu-active" : "menu"}`}
          key={menu.id}
        >
          <p>{menu.link}</p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Menu;
