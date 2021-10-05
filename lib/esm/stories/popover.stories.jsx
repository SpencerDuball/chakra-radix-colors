import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, } from "@chakra-ui/react";
export default {
    title: "Test/Popover",
    component: Popover,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <Popover>
        <PopoverTrigger>
          <Button>Trigger</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Confirmation!</PopoverHeader>
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </VStack>);
};
export const Primary = Template.bind({});
