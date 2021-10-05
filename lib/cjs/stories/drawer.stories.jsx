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
    title: "Test/Drawer",
    component: react_3.Drawer,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Drawer isOpen={true} onClose={() => { }} placement="right">
        <react_3.DrawerOverlay />
        <react_3.DrawerContent>
          <react_3.DrawerCloseButton />
          <react_3.DrawerHeader>Create your account</react_3.DrawerHeader>

          <react_3.DrawerBody>
            <react_3.Input placeholder="Type here..."/>
            <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
              Toggle Mode
            </react_2.Button>
          </react_3.DrawerBody>

          <react_3.DrawerFooter>
            <react_2.Button variant="outline" mr={3}>
              Cancel
            </react_2.Button>
            <react_2.Button colorScheme="blue">Save</react_2.Button>
          </react_3.DrawerFooter>
        </react_3.DrawerContent>
      </react_3.Drawer>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
