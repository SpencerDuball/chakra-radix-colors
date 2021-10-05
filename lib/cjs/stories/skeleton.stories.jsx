"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@chakra-ui/react");
const tools_1 = require("../src/util/tools");
exports.default = {
    title: "Test/Skeleton",
    component: react_3.Skeleton,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    const c = (0, tools_1.useThemedColor)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_3.Skeleton w="full" height="20px"/>
        <react_3.Skeleton w="full" height="20px"/>
        <react_3.Skeleton w="full" height="20px"/>
      </react_2.VStack>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_2.Box padding="6" boxShadow="lg" bg={c("slate.2")} w="full">
          <react_3.SkeletonCircle size="10"/>
          <react_3.SkeletonText mt="4" noOfLines={4} spacing="4"/>
        </react_2.Box>
      </react_2.VStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
