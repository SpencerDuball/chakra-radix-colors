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
    title: "Test/FormControl",
    component: react_3.FormControl,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.FormControl id="email" isRequired isInvalid>
        <react_3.FormLabel>Email address</react_3.FormLabel>
        <react_3.Input type="email"/>
        <react_3.FormHelperText>We'll never share your email.</react_3.FormHelperText>
        <react_3.FormErrorMessage>This is the form error message.</react_3.FormErrorMessage>
      </react_3.FormControl>
      <react_3.FormControl as="fieldset">
        <react_3.FormLabel as="legend">Favorite Naruto Character</react_3.FormLabel>
        <react_3.RadioGroup defaultValue="Itachi">
          <react_2.HStack spacing="24px">
            <react_3.Radio value="Sasuke">Sasuke</react_3.Radio>
            <react_3.Radio value="Nagato">Nagato</react_3.Radio>
            <react_3.Radio value="Itachi">Itachi</react_3.Radio>
            <react_3.Radio value="Sage of the six Paths">Sage of the six Paths</react_3.Radio>
          </react_2.HStack>
        </react_3.RadioGroup>
        <react_3.FormHelperText>Select only if you're a fan.</react_3.FormHelperText>
      </react_3.FormControl>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
