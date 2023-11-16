import React, { useState, useEffect, useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ThemeContext } from "./Theme";
import Button from "@material-ui/core/Button";
const DarkModeToggle = () => {
 
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button
    onClick={() => toggleTheme()}
    >
      {/* color="inherit"
      aria-label="Toggle Dark Mode" */}
    
    <div className=" grid place-content-center">
    {theme=="dark" ?<Brightness7Icon style={{color:"white "}}/> : <Brightness4Icon />}
    </div>
      {/* {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />} */}
    </Button>
  );
};

export default DarkModeToggle;
