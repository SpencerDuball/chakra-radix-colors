import React from "react";
import { Box, VStack, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, useColorMode, } from "@chakra-ui/react";
export default {
    title: "Test/Accordion",
    component: Accordion,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" id="sup" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Accordion w="full">
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>);
};
export const Primary = Template.bind({});
