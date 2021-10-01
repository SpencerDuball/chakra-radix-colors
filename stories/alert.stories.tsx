import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Text,
  Code,
  Divider,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useColorMode,
} from "@chakra-ui/react";

export default {
  title: "Test/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack w="full">
      <Button
        size="md"
        onClick={toggleColorMode}
        colorScheme="gray"
        w="max"
        id="sup"
        data-cy="toggle-mode-button"
      >
        Toggle Mode
      </Button>
      <Divider />
      <VStack w="full">
        <Text as="h1" fontWeight="bold">
          Status Prop
        </Text>
        <Alert status="error" data-cy="alert-error">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <Alert status="success" data-cy="alert-success">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <Alert status="warning" data-cy="alert-warning">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
        <Alert status="info" data-cy="alert-info">
          <AlertIcon />
          <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
          <AlertDescription>
            Your Chakra experience may be degraded.
          </AlertDescription>
          <CloseButton position="absolute" right="8px" top="8px" />
        </Alert>
      </VStack>
      <Divider />
      <VStack w="full">
        <Text as="h1" fontWeight="bold">
          Variant Prop
        </Text>
        <>
          <Text as="h2" alignSelf="start">
            variant="subtle"
          </Text>
          <HStack w="full">
            <Alert colorScheme="brown" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="brownDark" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
          <HStack w="full">
            <Alert colorScheme="yellow" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="yellowDark" variant="subtle">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
        </>
        <>
          <Text as="h2" alignSelf="start">
            variant="solid"
          </Text>
          <HStack w="full">
            <Alert colorScheme="blue" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="blueDark" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
          <HStack w="full">
            <Alert colorScheme="sky" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="skyDark" variant="solid">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
        </>
        <>
          <Text as="h2" alignSelf="start">
            variant="left-accent"
          </Text>
          <HStack w="full">
            <Alert colorScheme="purple" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="purpleDark" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
          <HStack w="full">
            <Alert colorScheme="lime" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="limeDark" variant="left-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
        </>
        <>
          <Text as="h2" alignSelf="start">
            variant="top-accent"
          </Text>
          <HStack w="full">
            <Alert colorScheme="red" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="redDark" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
          <HStack w="full">
            <Alert colorScheme="mint" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
            <Alert colorScheme="mintDark" variant="top-accent">
              <AlertIcon />
              Data uploaded to the server. Fire on!
            </Alert>
          </HStack>
        </>
      </VStack>
    </VStack>
  );
};

export const Primary = Template.bind({});
