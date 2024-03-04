"use client";
import { BsMoonFill } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";
import useTheme from "next-theme";
import "./style.scss";
const Header = () => {
  const { theme, toggle } = useTheme();
  return (
    <nav className={"header"}>
      <div className={"header__logo"}>
        <h1>Where in the world?</h1>
      </div>
      <div onClick={toggle} className={"header__toggle_btn"}>
        {theme == "light" ? <BiMoon /> : <BsMoonFill />}
        <p>{theme} Mode</p>
      </div>
    </nav>
  );
};

export default Header;
