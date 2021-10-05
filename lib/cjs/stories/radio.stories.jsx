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
    title: "Test/Radio",
    component: react_3.Radio,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.HStack direction="row">
        <react_3.Radio colorScheme="blue" defaultChecked value="1">
          First
        </react_3.Radio>
        <react_3.Radio colorScheme="blueDark" defaultChecked value="2">
          Second
        </react_3.Radio>
        <react_3.Radio colorScheme="mint" defaultChecked value="3">
          Third
        </react_3.Radio>
        <react_3.Radio colorScheme="mintDark" defaultChecked value="4">
          Third
        </react_3.Radio>
        <react_3.Radio isDisabled value="4">
          Third
        </react_3.Radio>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
