import { action } from "@storybook/addon-actions";
import { boolean, select, text, withKnobs } from "@storybook/addon-knobs/react";
import { storiesOf } from "@storybook/react";
import React from "react";

import { Button } from ".";

const events = {
  onClick: action("onClick"),
  onMouseEnter: action("onMouseEnter")
};

const stories = storiesOf("Atoms/Button", module);

stories.add("Default", () => (
  <Button {...events}>Lorem ipsum dolor sit amet</Button>
));

stories.addDecorator(withKnobs).add("Knobs", () => {
  const label = text("label", "Lorem ipsum dolor sit amet");
  const color = select("color", ["none", "primary"], "none");
  const primary = boolean("primary", false);
  const uppercase = boolean("uppercase", false);

  return (
    <Button color={color} primary={primary} uppercase={uppercase} {...events}>
      {label}
    </Button>
  );
});
