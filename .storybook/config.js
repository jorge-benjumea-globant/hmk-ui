import { configure, addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";

import theme from "./../src/theme";

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);

const req = require.context("../src", true, /stories\.js$/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
