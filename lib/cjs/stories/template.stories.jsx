"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const index_1 = require("../src/index");
exports.default = {
    title: "Test/Example",
    component: react_2.Button,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    const c = (0, index_1.useThemedColor)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.Text bg={c("blue.4")} color={c("blue.9")}>
        Hello
      </react_2.Text>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
