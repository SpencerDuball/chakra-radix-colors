import React from "react";
import { VStack, Text, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { useThemedColor } from "../src/index";
export default {
    title: "Test/Example",
    component: Button,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    const c = useThemedColor();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <Text bg={c("blue.4")} color={c("blue.9")}>
        Hello
      </Text>
    </VStack>);
};
export const Primary = Template.bind({});
