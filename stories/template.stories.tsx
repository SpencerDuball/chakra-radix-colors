import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Text,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { useThemedColor } from "../src/index";

export default {
  title: "Test/Example",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { toggleColorMode } = useColorMode();
  const c = useThemedColor();
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
      <Text bg={c("blue.4")} color={c("blue.9")}>
        Hello
      </Text>
    </VStack>
  );
};

export const Primary = Template.bind({});
