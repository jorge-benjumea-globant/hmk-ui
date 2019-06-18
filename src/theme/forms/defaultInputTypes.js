import * as theme from "../../themes";

const defaultInputTypes = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize
  },
  placeholder: {
    color: "red"
  },
  invalid: {
    color: "red",
    "border-color": ["red"]
  },
  focus: {
    "border-color": theme.HMKPrimary,
    "outline-color": "transparent",
    "outline-style": "none"
  }
};

export default defaultInputTypes;
