"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
exports.default = {
    title: "Test/Alert",
    component: react_2.Alert,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" id="sup" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_2.Text as="h1" fontWeight="bold">
          Status Prop
        </react_2.Text>
        <react_2.Alert status="error" data-cy="alert-error">
          <react_2.AlertIcon />
          <react_2.AlertTitle mr={2}>Your browser is outdated!</react_2.AlertTitle>
          <react_2.AlertDescription>
            Your Chakra experience may be degraded.
          </react_2.AlertDescription>
          <react_2.CloseButton position="absolute" right="8px" top="8px"/>
        </react_2.Alert>
        <react_2.Alert status="success" data-cy="alert-success">
          <react_2.AlertIcon />
          <react_2.AlertTitle mr={2}>Your browser is outdated!</react_2.AlertTitle>
          <react_2.AlertDescription>
            Your Chakra experience may be degraded.
          </react_2.AlertDescription>
          <react_2.CloseButton position="absolute" right="8px" top="8px"/>
        </react_2.Alert>
        <react_2.Alert status="warning" data-cy="alert-warning">
          <react_2.AlertIcon />
          <react_2.AlertTitle mr={2}>Your browser is outdated!</react_2.AlertTitle>
          <react_2.AlertDescription>
            Your Chakra experience may be degraded.
          </react_2.AlertDescription>
          <react_2.CloseButton position="absolute" right="8px" top="8px"/>
        </react_2.Alert>
        <react_2.Alert status="info" data-cy="alert-info">
          <react_2.AlertIcon />
          <react_2.AlertTitle mr={2}>Your browser is outdated!</react_2.AlertTitle>
          <react_2.AlertDescription>
            Your Chakra experience may be degraded.
          </react_2.AlertDescription>
          <react_2.CloseButton position="absolute" right="8px" top="8px"/>
        </react_2.Alert>
      </react_2.VStack>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_2.Text as="h1" fontWeight="bold">
          Variant Prop
        </react_2.Text>
        <>
          <react_2.Text as="h2" alignSelf="start">
            variant="subtle"
          </react_2.Text>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="brown" variant="subtle">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="brownDark" variant="subtle">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="yellow" variant="subtle">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="yellowDark" variant="subtle">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
        </>
        <>
          <react_2.Text as="h2" alignSelf="start">
            variant="solid"
          </react_2.Text>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="blue" variant="solid">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="blueDark" variant="solid">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="sky" variant="solid">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="skyDark" variant="solid">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
        </>
        <>
          <react_2.Text as="h2" alignSelf="start">
            variant="left-accent"
          </react_2.Text>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="purple" variant="left-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="purpleDark" variant="left-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="lime" variant="left-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="limeDark" variant="left-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
        </>
        <>
          <react_2.Text as="h2" alignSelf="start">
            variant="top-accent"
          </react_2.Text>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="red" variant="top-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="redDark" variant="top-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
          <react_2.HStack w="full">
            <react_2.Alert colorScheme="mint" variant="top-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
            <react_2.Alert colorScheme="mintDark" variant="top-accent">
              <react_2.AlertIcon />
              Data uploaded to the server. Fire on!
            </react_2.Alert>
          </react_2.HStack>
        </>
      </react_2.VStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
