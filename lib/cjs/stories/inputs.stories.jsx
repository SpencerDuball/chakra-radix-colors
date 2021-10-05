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
    title: "Test/Input",
    component: react_3.Input,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.HStack>
        <react_2.VStack>
          <react_3.FormControl id="yo" isInvalid>
            <react_3.Input placeholder="Outline" variant="outline"/>
          </react_3.FormControl>
          <react_3.FormControl id="yo">
            <react_3.Input placeholder="Outline" variant="outline"/>
          </react_3.FormControl>
        </react_2.VStack>
        <react_2.VStack>
          <react_3.FormControl id="yo" isInvalid>
            <react_3.Input placeholder="Outline" variant="filled"/>
          </react_3.FormControl>
          <react_3.FormControl id="yo">
            <react_3.Input placeholder="Outline" variant="filled"/>
          </react_3.FormControl>
        </react_2.VStack>
        <react_2.VStack>
          <react_3.FormControl id="yo" isInvalid>
            <react_3.Input placeholder="Outline" variant="flushed"/>
          </react_3.FormControl>
          <react_3.FormControl id="yo">
            <react_3.Input placeholder="Outline" variant="flushed"/>
          </react_3.FormControl>
        </react_2.VStack>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
