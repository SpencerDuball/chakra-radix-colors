import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";

export default {
  title: "Test/Example",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
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
    </VStack>
  );
};

export const Primary = Template.bind({});
