import React, { useState, useEffect } from "react";
import "../assets/styles/menu.css";

const Menu = ({ appMode }) => {
  const appMenu = [
    { id: 1, link: "Entry1" },
    { id: 2, link: "Entry2" },
    { id: 3, link: "Entry3" },
    { id: 4, link: "Entry4" },
    { id: 5, link: "Entry5" },
  ];
  const adminMenu = [
    { id: 1, link: "AdminEntry1" },
    { id: 2, link: "AdminEntry2" },
    { id: 3, link: "AdminEntry3" },
  ];
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
    <div>
      {menuItems.map((menu) => (
        <div
          onClick={() => setSelected(menu.id)}
          className={`${selected == menu.id ? "menu-active" : "menu"}`}
          key={menu.id}
        >
          <p>{menu.link}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
