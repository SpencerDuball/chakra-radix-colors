import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Kbd } from "@chakra-ui/react";
export default {
    title: "Test/Kbd",
    component: Kbd,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>
    </VStack>);
};
export const Primary = Template.bind({});
