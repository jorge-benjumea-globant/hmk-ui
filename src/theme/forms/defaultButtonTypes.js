import * as theme from "../../themes";

const defaultButtonTypes = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize
  },
  hover: {
    width: "25px",
    height: "25px",
    fill: "transparent",
    stroke: "black",
    "stroke-linecap": "round",
    "stroke-width": "2"
  },
  disabled: {
    "padding-top": "0.25em"
  }
};

export default defaultButtonTypes;
