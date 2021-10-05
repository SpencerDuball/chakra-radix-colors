import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, } from "@chakra-ui/react";
export default {
    title: "Test/NumberInput",
    component: NumberInput,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </VStack>);
};
export const Primary = Template.bind({});
