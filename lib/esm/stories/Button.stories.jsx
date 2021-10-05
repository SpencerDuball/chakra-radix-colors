import React from "react";
import { VStack, HStack, Divider, Text, useColorMode } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
export default {
    title: "Test/Button",
    component: Button,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <Text as="h1" fontWeight="bold">
        Variant Prop
      </Text>
      <HStack>
        <>
          <VStack>
            <Button colorScheme="teal" variant="solid">
              Button
            </Button>
            <Button colorScheme="tealDark" variant="solid">
              Button
            </Button>
          </VStack>
          <VStack>
            <Button colorScheme="lime" variant="solid">
              Button
            </Button>
            <Button colorScheme="limeDark" variant="solid">
              Button
            </Button>
          </VStack>
        </>
        <>
          <VStack>
            <Button colorScheme="crimson" variant="outline">
              Button
            </Button>
            <Button colorScheme="crimsonDark" variant="outline">
              Button
            </Button>
          </VStack>
          <VStack>
            <Button colorScheme="yellow" variant="outline">
              Button
            </Button>
            <Button colorScheme="yellowDark" variant="outline">
              Button
            </Button>
          </VStack>
        </>
        <>
          <VStack>
            <Button colorScheme="grass" variant="ghost">
              Button
            </Button>
            <Button colorScheme="grassDark" variant="ghost">
              Button
            </Button>
          </VStack>
          <VStack>
            <Button colorScheme="amber" variant="ghost">
              Button
            </Button>
            <Button colorScheme="amberDark" variant="ghost">
              Button
            </Button>
          </VStack>
        </>
        <>
          <VStack>
            <Button colorScheme="plum" variant="link">
              Button
            </Button>
            <Button colorScheme="plumDark" variant="link">
              Button
            </Button>
          </VStack>
          <VStack>
            <Button colorScheme="sky" variant="link">
              Button
            </Button>
            <Button colorScheme="skyDark" variant="link">
              Button
            </Button>
          </VStack>
        </>
      </HStack>
    </VStack>);
};
export const Primary = Template.bind({});
