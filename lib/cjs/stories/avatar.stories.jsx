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
    title: "Test/Avatar",
    component: react_3.Avatar,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.HStack>
        <react_3.Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link"/>
        <react_3.Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link"/>
        <react_3.Avatar src="http://bit.ly/broken-link"/>
      </react_2.HStack>
      <react_2.HStack>
        <react_3.Avatar>
          <react_3.AvatarBadge bg="tomato" boxSize="1.25em"/>
        </react_3.Avatar>
      </react_2.HStack>
      <react_2.HStack>
        <react_3.AvatarGroup size="md" max={2}>
          <react_3.Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
          <react_3.Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>
          <react_3.Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
          <react_3.Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba"/>
          <react_3.Avatar name="Christian Nwamba" src="https://bit.ly/code-beast"/>
        </react_3.AvatarGroup>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
