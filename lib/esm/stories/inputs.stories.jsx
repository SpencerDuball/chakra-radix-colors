import React from "react";
import { VStack, HStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Input, FormControl } from "@chakra-ui/react";
export default {
    title: "Test/Input",
    component: Input,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <HStack>
        <VStack>
          <FormControl id="yo" isInvalid>
            <Input placeholder="Outline" variant="outline"/>
          </FormControl>
          <FormControl id="yo">
            <Input placeholder="Outline" variant="outline"/>
          </FormControl>
        </VStack>
        <VStack>
          <FormControl id="yo" isInvalid>
            <Input placeholder="Outline" variant="filled"/>
          </FormControl>
          <FormControl id="yo">
            <Input placeholder="Outline" variant="filled"/>
          </FormControl>
        </VStack>
        <VStack>
          <FormControl id="yo" isInvalid>
            <Input placeholder="Outline" variant="flushed"/>
          </FormControl>
          <FormControl id="yo">
            <Input placeholder="Outline" variant="flushed"/>
          </FormControl>
        </VStack>
      </HStack>
    </VStack>);
};
export const Primary = Template.bind({});
