import * as theme from "../../themes";

const defaultThumbnail = {
  default: {
    color: theme.HMKAccent,
    display: "inline-block",
    "font-size": theme.fontSize,
    "font-weight": "bold",
    "max-width": "1440px",
    padding: "1% 0.5%",
    width: "22%"
  },
  hover: {
    opacity: ".6"
  },
  img: {
    background: theme.sectionBgColor,
    cursor: "default",
    display: "block",
    height: "164px",
    "text-align": "center",
    width: "100%"
  },
  description: {
    display: "block",
    width: "100%"
  }
};

export default defaultThumbnail;
