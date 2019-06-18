// Default theme for Li dropdown
import * as theme from "../../themes";

const defaultSocialNetworkLink = {
  default: {
    color: theme.HMKAccent,
    "font-size": theme.fontSize
  },
  hover: {
    color: theme.HMKPrimary
  },
  visited: {
    color: theme.HMKSecondary
  },
  before: {
    content: "'>'"
  }
};

export default defaultSocialNetworkLink;
