import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { CloseButton } from "@chakra-ui/react";

export default {
  title: "Test/CloseButton",
  component: Button,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => {
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
      <CloseButton />
    </VStack>
  );
};

export const Primary = Template.bind({});
