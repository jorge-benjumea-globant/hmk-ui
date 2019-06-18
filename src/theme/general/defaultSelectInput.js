import * as theme from "../../themes";

const defaultSelectInput = {
  default: {
    "font-size": theme.fontSize,
    outline: "0"
  },
  disabled: {},
  invalid: {
    color: "red",
    "border-color": ["red"]
  },
  focus: {
    "border-color": theme.HMKPrimary
  }
};

export default defaultSelectInput;
