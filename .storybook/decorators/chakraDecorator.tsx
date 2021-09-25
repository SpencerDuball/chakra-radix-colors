import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export const chakraDecorator = (Story) => (
  <>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  </>
);
