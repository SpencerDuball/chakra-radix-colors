import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

export default {
  title: "Test/Radio",
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => {
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
      <HStack direction="row">
        <Radio colorScheme="blue" defaultChecked value="1">
          First
        </Radio>
        <Radio colorScheme="blueDark" defaultChecked value="2">
          Second
        </Radio>
        <Radio colorScheme="mint" defaultChecked value="3">
          Third
        </Radio>
        <Radio colorScheme="mintDark" defaultChecked value="4">
          Third
        </Radio>
        <Radio isDisabled value="4">
          Third
        </Radio>
      </HStack>
    </VStack>
  );
};

export const Primary = Template.bind({});
