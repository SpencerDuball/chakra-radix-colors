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
    title: "Test/Badge",
    component: react_3.Badge,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Text as="h2" fontWeight="bold">
        Variant Prop
      </react_3.Text>
      <react_2.HStack>
        <>
          <react_2.VStack>
            <react_3.Badge variant="outline" colorScheme="green">
              Default
            </react_3.Badge>
            <react_3.Badge variant="outline" colorScheme="mint">
              Default
            </react_3.Badge>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Badge variant="outline" colorScheme="greenDark">
              Default
            </react_3.Badge>
            <react_3.Badge variant="outline" colorScheme="mintDark">
              Default
            </react_3.Badge>
          </react_2.VStack>
        </>
        <>
          <react_2.VStack>
            <react_3.Badge variant="solid" colorScheme="red">
              Default
            </react_3.Badge>
            <react_3.Badge variant="solid" colorScheme="amber">
              Default
            </react_3.Badge>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Badge variant="solid" colorScheme="redDark">
              Default
            </react_3.Badge>
            <react_3.Badge variant="solid" colorScheme="amberDark">
              Default
            </react_3.Badge>
          </react_2.VStack>
        </>
        <>
          <react_2.VStack>
            <react_3.Badge variant="subtle" colorScheme="brown">
              Default
            </react_3.Badge>
            <react_3.Badge variant="subtle" colorScheme="sky">
              Default
            </react_3.Badge>
          </react_2.VStack>
          <react_2.VStack>
            <react_3.Badge variant="subtle" colorScheme="brown">
              Default
            </react_3.Badge>
            <react_3.Badge variant="subtle" colorScheme="skyDark">
              Default
            </react_3.Badge>
          </react_2.VStack>
        </>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
