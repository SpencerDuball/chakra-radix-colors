import React from "react";
import { render } from "@testing-library/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../src/theme";
import "@testing-library/jest-dom";
const AllTheProvider = ({ children }) => {
    return (<>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>);
};
const customRender = (ui, options) => render(ui, Object.assign({ wrapper: AllTheProvider }, options));
export * from "@testing-library/react";
export { customRender as render };
