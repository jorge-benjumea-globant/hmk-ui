'use strict';

var NO_COLOR = "magenta";
var HMKPrimary = "#613790"; // const greyOslo = "#767676";
// const greyCharcoal = "#474747";
// const heather = "#b8becc";
// const limeade = "#458700";
// const redCrimson = "#eb1221";
// const buddhaGold = "#b2bd00";
// const redTicklePink = "#f787a6";
// const HMKSecondary = "#9571af";
// const HMKAccent = "#cf1b74";
// const HMKSecondaryAccent = "#0badc0";
// const borderColor = "#ededed";
// const fontColor = "#222222";
// const btnFontColor = "#ffffff";
// const btnColor = "#999";
// const btnColorHover = "#301b48";
// const btnColorDisabled = "#b2b2b2";
// const errorColor = "#ff0000";

var COLORS = {
  primary: HMKPrimary,
  white: "#FFFFFF",
  black: "#000000",
  black20: "rgba(0,0,0,.2)",
  black55: "rgba(0,0,0,.45)",
  grey0: "#474747",
  grey1: NO_COLOR,
  grey2: NO_COLOR,
  grey3: NO_COLOR,
  grey4: NO_COLOR,
  grey5: NO_COLOR,
  grey6: NO_COLOR,
  grey7: NO_COLOR,
  messaging: {
    error: "#eb1221",
    info: NO_COLOR,
    success: NO_COLOR,
    warning: NO_COLOR,
    default: NO_COLOR
  }
};

var FORMS = {
  field: {
    separation: "20px"
  }
};

var theme = {
  colors: COLORS,
  forms: FORMS,
  components: {}
};

module.exports = theme;
