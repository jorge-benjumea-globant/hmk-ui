import * as theme from "../../themes";

const defaultMenuItem = {
  default: {
    background: theme.inputBackgroundColor,
    "border-color": theme.btnFontColor,
    "border-radius": "3px",
    "border-style": "solid",
    "border-width": "1px",
    display: "block",
    color: "#2b2b2b",
    "font-family": "Montserrat",
    "font-size": "1em",
    "font-weight": "normal",
    margin: "0",
    padding: "0",
    target: "_self",
    "text-transform": "uppercase",
    transition: "background-color 0.5s ease",
    "white-space": "nowrap",
    width: "auto"
  },
  hover: {
    color: theme.HMKPrimary,
    outline: 0
  },
  visited: {
    color: theme.HMKSecondary,
    outline: 0
  }
};

export default defaultMenuItem;
