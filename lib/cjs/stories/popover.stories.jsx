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
    title: "Test/Popover",
    component: react_3.Popover,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Popover>
        <react_3.PopoverTrigger>
          <react_2.Button>Trigger</react_2.Button>
        </react_3.PopoverTrigger>
        <react_3.PopoverContent>
          <react_3.PopoverArrow />
          <react_3.PopoverCloseButton />
          <react_3.PopoverHeader>Confirmation!</react_3.PopoverHeader>
          <react_3.PopoverBody>
            Are you sure you want to have that milkshake?
          </react_3.PopoverBody>
        </react_3.PopoverContent>
      </react_3.Popover>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
