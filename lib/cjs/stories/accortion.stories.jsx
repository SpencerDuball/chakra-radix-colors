"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primary = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
exports.default = {
    title: "Test/Accordion",
    component: react_2.Accordion,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" id="sup" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Accordion w="full">
        <react_2.AccordionItem>
          <h2>
            <react_2.AccordionButton>
              <react_2.Box flex="1" textAlign="left">
                Section 1 title
              </react_2.Box>
              <react_2.AccordionIcon />
            </react_2.AccordionButton>
          </h2>
          <react_2.AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </react_2.AccordionPanel>
        </react_2.AccordionItem>

        <react_2.AccordionItem>
          <h2>
            <react_2.AccordionButton>
              <react_2.Box flex="1" textAlign="left">
                Section 2 title
              </react_2.Box>
              <react_2.AccordionIcon />
            </react_2.AccordionButton>
          </h2>
          <react_2.AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </react_2.AccordionPanel>
        </react_2.AccordionItem>
      </react_2.Accordion>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
