import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { Badge, Text } from "@chakra-ui/react";

export default {
  title: "Test/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => {
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
      <Text as="h2" fontWeight="bold">
        Variant Prop
      </Text>
      <HStack>
        <>
          <VStack>
            <Badge variant="outline" colorScheme="green">
              Default
            </Badge>
            <Badge variant="outline" colorScheme="mint">
              Default
            </Badge>
          </VStack>
          <VStack>
            <Badge variant="outline" colorScheme="greenDark">
              Default
            </Badge>
            <Badge variant="outline" colorScheme="mintDark">
              Default
            </Badge>
          </VStack>
        </>
        <>
          <VStack>
            <Badge variant="solid" colorScheme="red">
              Default
            </Badge>
            <Badge variant="solid" colorScheme="amber">
              Default
            </Badge>
          </VStack>
          <VStack>
            <Badge variant="solid" colorScheme="redDark">
              Default
            </Badge>
            <Badge variant="solid" colorScheme="amberDark">
              Default
            </Badge>
          </VStack>
        </>
        <>
          <VStack>
            <Badge variant="subtle" colorScheme="brown">
              Default
            </Badge>
            <Badge variant="subtle" colorScheme="sky">
              Default
            </Badge>
          </VStack>
          <VStack>
            <Badge variant="subtle" colorScheme="brown">
              Default
            </Badge>
            <Badge variant="subtle" colorScheme="skyDark">
              Default
            </Badge>
          </VStack>
        </>
      </HStack>
    </VStack>
  );
};

export const Primary = Template.bind({});
