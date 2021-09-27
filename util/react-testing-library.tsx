import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../src/theme";
import "@testing-library/jest-dom";

const AllTheProvider: FC = ({ children }) => {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
