import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { select } from "@storybook/addon-knobs";
import BlueMountain from "./BlueMountain/BlueMountain";
import RedSea from './RedSea/RedSea'

const themes = { BlueMountain: BlueMountain, RedSea: RedSea };
const themeNames = Object.keys(themes);

export default ({ children }) => {
  const theme = select(
    "Theme",
    themeNames,
    themeNames[0],
    "Themes"
  );

  return (
    <ThemeProvider theme={themes[theme]}>
      {children}
    </ThemeProvider>
  );
};