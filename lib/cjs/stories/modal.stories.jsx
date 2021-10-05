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
    title: "Test/Modal",
    component: react_3.Modal,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Modal isOpen={true} onClose={() => { }}>
        <react_3.ModalOverlay />
        <react_3.ModalContent>
          <react_3.ModalHeader>Modal Title</react_3.ModalHeader>
          <react_3.ModalCloseButton />
          <react_3.ModalBody>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt
            nostrud ad veniam.
          </react_3.ModalBody>
          <react_3.ModalFooter>
            <react_2.Button colorScheme="blue" mr={3} onClick={toggleColorMode}>
              Close
            </react_2.Button>
            <react_2.Button variant="ghost">Secondary Action</react_2.Button>
          </react_3.ModalFooter>
        </react_3.ModalContent>
      </react_3.Modal>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
