"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@chakra-ui/react");
exports.default = {
    title: "Test/Button",
    component: react_3.Button,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_3.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_3.Button>
      <react_2.Divider />
      <react_2.Text as="h1" fontWeight="bold">
        Variant Prop
      </react_2.Text>
      <react_2.HStack>
        <>
          <react_2.VStack>
            <react_3.Button colorScheme="teal" variant="solid">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="tealDark" variant="solid">
              Button
            </react_3.Button>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Button colorScheme="lime" variant="solid">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="limeDark" variant="solid">
              Button
            </react_3.Button>
          </react_2.VStack>
        </>
        <>
          <react_2.VStack>
            <react_3.Button colorScheme="crimson" variant="outline">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="crimsonDark" variant="outline">
              Button
            </react_3.Button>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Button colorScheme="yellow" variant="outline">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="yellowDark" variant="outline">
              Button
            </react_3.Button>
          </react_2.VStack>
        </>
        <>
          <react_2.VStack>
            <react_3.Button colorScheme="grass" variant="ghost">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="grassDark" variant="ghost">
              Button
            </react_3.Button>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Button colorScheme="amber" variant="ghost">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="amberDark" variant="ghost">
              Button
            </react_3.Button>
          </react_2.VStack>
        </>
        <>
          <react_2.VStack>
            <react_3.Button colorScheme="plum" variant="link">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="plumDark" variant="link">
              Button
            </react_3.Button>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Button colorScheme="sky" variant="link">
              Button
            </react_3.Button>
            <react_3.Button colorScheme="skyDark" variant="link">
              Button
            </react_3.Button>
          </react_2.VStack>
        </>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
