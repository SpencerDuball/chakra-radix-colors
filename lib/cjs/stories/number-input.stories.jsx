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
    title: "Test/NumberInput",
    component: react_3.NumberInput,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.NumberInput>
        <react_3.NumberInputField />
        <react_3.NumberInputStepper>
          <react_3.NumberIncrementStepper />
          <react_3.NumberDecrementStepper />
        </react_3.NumberInputStepper>
      </react_3.NumberInput>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
