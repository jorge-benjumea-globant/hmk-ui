// Default theme for Li dropdown
import * as theme from "../../themes";

const defaultModal = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize
  },
  Content: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "2.5em 1.5em 1.5em 1.5em",
    "background-color": "#ffffff",
    "box-shadow": " 0 0 10px 3px rgba(0, 0, 0, 0.1)",
    "overflow-y": "auto",
    "-webkit-overflow-scrolling": "touch",
    responsive: [
      {
        query: "@media screen and (min-width: 500px)",
        left: "50%",
        top: "50%",
        height: "auto",
        transform: "translate(-50%, -50%)",
        "max-width": "30em",
        "max-height": "calc(100% - 1em)"
      }
    ]
  },
  BtnClose: {
    position: "absolute",
    top: "0",
    right: "0",
    padding: "0.5em",
    "line-height": "1",
    background: "#f6f6f7",
    border: "0",
    "box-shadow": "0",
    cursor: "pointer"
  },
  IconClose: {
    width: "25px",
    height: "25px",
    fill: "transparent",
    stroke: "black",
    "stroke-linecap": "round",
    "stroke-width": "2"
  },
  ContentBody: {
    "padding-top": "0.25em"
  },
  CloseHidden: {
    border: "0 !important",
    clip: "rect(0 0 0 0) !important",
    height: "1px !important",
    margin: "-1px !important",
    overflow: "hidden !important",
    padding: "0 !important",
    position: "absolute !important",
    width: "1px !important",
    "white-space": "nowrap !important"
  }
};

export default defaultModal;
