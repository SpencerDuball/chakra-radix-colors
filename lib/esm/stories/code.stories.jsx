import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Code } from "@chakra-ui/react";
export default {
    title: "Test/Code",
    component: Code,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <Code>a = setThisThing()</Code>
      <Code colorScheme="violet">a = setThisThing()</Code>
      <Code colorScheme="violetDark">a = setThisThing()</Code>
      <Code colorScheme="amber">a = setThisThing()</Code>
      <Code colorScheme="amberDark">a = setThisThing()</Code>
    </VStack>);
};
export const Primary = Template.bind({});
