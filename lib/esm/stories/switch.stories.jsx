import React from "react";
import { VStack, HStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
export default {
    title: "Test/Switch",
    component: Switch,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <HStack direction="row">
        <VStack>
          <Switch colorScheme="red"/>
          <Switch colorScheme="redDark" size="lg"/>
        </VStack>
        <VStack>
          <Switch colorScheme="mint"/>
          <Switch colorScheme="mintDark" size="lg"/>
        </VStack>
      </HStack>
    </VStack>);
};
export const Primary = Template.bind({});
