import React from "react";
import style from "../styles/header.module.css";

type Props = {
  children: React.ReactNode;
};

const Nav = ({ children }: Props) => {
  return (
    <header className={style["header"]}>
      <nav>{children}</nav>
    </header>
  );
};

export default Nav;
