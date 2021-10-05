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
    title: "Test/Code",
    component: react_3.Code,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Code>a = setThisThing()</react_3.Code>
      <react_3.Code colorScheme="violet">a = setThisThing()</react_3.Code>
      <react_3.Code colorScheme="violetDark">a = setThisThing()</react_3.Code>
      <react_3.Code colorScheme="amber">a = setThisThing()</react_3.Code>
      <react_3.Code colorScheme="amberDark">a = setThisThing()</react_3.Code>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
