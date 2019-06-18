// import { isAbsolute } from "path";
import * as theme from "../../themes";

const defaultTab = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize
  },
  container: {
    position: "relative",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    padding: "2.5em 1.5em 1.5em 1.5em",
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
  menu: {
    padding: "0px 0px 0px 0px"
  },
  label: {
    color: "black",
    "font-weight": "bold",
    display: "inline-block",
    "list-style": "none",
    cursor: "pointer",
    padding: "0.5rem 0.75rem"
  },
  content: {
    "padding-top": "0.25em",
    width: "80%"
  },
  showMore: {},
  active: {
    color: "purple",
    "border-color": ["purple"],
    "border-style": ["solid"],
    "border-width": ["0px", "0px", "3px", "0px"]
  }
};

export default defaultTab;
