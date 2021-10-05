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
    title: "Test/Textarea",
    component: react_3.Textarea,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Textarea placeholder="Here is a sample placeholder"/>
      <react_3.Textarea isDisabled placeholder="Here is a sample placeholder"/>
      <react_3.Textarea isInvalid placeholder="Here is a sample placeholder"/>
      <react_3.Textarea variant="outline" placeholder="Here is a sample placeholder"/>
      <react_3.Textarea variant="flushed" placeholder="Here is a sample placeholder"/>
      <react_3.Textarea variant="filled" placeholder="Here is a sample placeholder"/>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
