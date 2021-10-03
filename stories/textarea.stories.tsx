import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";

export default {
  title: "Test/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
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
      <Textarea placeholder="Here is a sample placeholder" />
      <Textarea isDisabled placeholder="Here is a sample placeholder" />
      <Textarea isInvalid placeholder="Here is a sample placeholder" />
      <Textarea variant="outline" placeholder="Here is a sample placeholder" />
      <Textarea variant="flushed" placeholder="Here is a sample placeholder" />
      <Textarea variant="filled" placeholder="Here is a sample placeholder" />
    </VStack>
  );
};

export const Primary = Template.bind({});
