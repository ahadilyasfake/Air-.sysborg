import React from "react";
import "./Nav.css";
import ToglleSwitch from "../Switch/ToglleSwitch";

export default function Nav() {
  const changeTheme = () => {
    console.log("hello");
    const currentTheme = document.documentElement.getAttribute("data-theme");
    let targetTheme = "light";
    if (currentTheme === "light") {
      targetTheme = "dark";
    }
    document.documentElement.setAttribute("data-theme", targetTheme);
    localStorage.setItem("theme", targetTheme);
  };

  let storedTheme = localStorage.getItem("theme") ? "dark" : "light";
  if (storedTheme)
    document.documentElement.setAttribute("data-theme", storedTheme);

  return (
    <nav>
      <div className="heading">
        <h1>
          Shared clipboard over the Air - by <span>sysBorg</span>
        </h1>
        <ToglleSwitch sx={{ m: 2 }} onChange={changeTheme} defaultChecked />
      </div>
    </nav>
  );
}
