import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Box,
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import { useThemedColor } from "../src/util/tools";

export default {
  title: "Test/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
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
      <VStack w="full">
        <Skeleton w="full" height="20px" />
        <Skeleton w="full" height="20px" />
        <Skeleton w="full" height="20px" />
      </VStack>
      <Divider />
      <VStack w="full">
        <Box padding="6" boxShadow="lg" bg={c("slate.2")} w="full">
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      </VStack>
    </VStack>
  );
};

export const Primary = Template.bind({});
