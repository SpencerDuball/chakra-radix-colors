import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Tooltip, Icon } from "@chakra-ui/react";
import { RiPhoneFill } from "react-icons/ri";

export default {
  title: "Test/Tooltip",
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
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
      <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
        Hover me
      </Tooltip>
      <Tooltip label="Phone number" fontSize="md">
        <span>
          <Icon as={RiPhoneFill} />
        </span>
      </Tooltip>
      <Tooltip hasArrow label="Call me" fontSize="md">
        <span>
          <Icon as={RiPhoneFill} />
        </span>
      </Tooltip>
    </VStack>
  );
};

export const Primary = Template.bind({});
