"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_3 = require("@chakra-ui/react");
const ri_1 = require("react-icons/ri");
exports.default = {
    title: "Test/Menu",
    component: react_3.Menu,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Menu>
        <react_3.MenuButton as={react_2.Button} rightIcon={<react_3.Icon as={ri_1.RiAwardFill}/>}>
          Actions
        </react_3.MenuButton>
        <react_3.MenuList>
          <react_3.MenuItem>Download</react_3.MenuItem>
          <react_3.MenuItem>Create a Copy</react_3.MenuItem>
          <react_3.MenuItem>Mark as Draft</react_3.MenuItem>
          <react_3.MenuItem>Delete</react_3.MenuItem>
          <react_3.MenuItem>Attend a Workshop</react_3.MenuItem>
        </react_3.MenuList>
      </react_3.Menu>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
