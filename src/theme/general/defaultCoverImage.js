import * as theme from "../../themes";

const defaultCoverImage = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize,
    position: "relative"
  },
  marketingContainer: {
    background: theme.sectionBgColor,
    color: theme.HMKSecondary,
    display: "block",
    "font-size": theme.fontSize,
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%"
  },
  marketingContainerHover: {
    opacity: ".8"
  }
};

export default defaultCoverImage;
