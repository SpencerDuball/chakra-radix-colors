import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";

export default {
  title: "Test/Progress",
  component: Progress,
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack w="full">
      <Button
        size="md"
        onClick={toggleColorMode}
        colorScheme="gray"
        w="max"
        data-cy="toggle-mode-button"
      >
        Toggle Mode
      </Button>
      <Divider />
      <Progress colorScheme="green" value={50} w="full" />
      <Progress colorScheme="greenDark" value={50} w="full" />
      <Progress colorScheme="sky" value={50} w="full" />
      <Progress colorScheme="skyDark" value={50} w="full" />
      <Progress colorScheme="green" hasStripe value={50} w="full" />
      <Progress colorScheme="greenDark" hasStripe value={50} w="full" />
      <Progress colorScheme="sky" hasStripe value={50} w="full" />
      <Progress colorScheme="skyDark" hasStripe value={50} w="full" />
    </VStack>
  );
};

export const Primary = Template.bind({});
