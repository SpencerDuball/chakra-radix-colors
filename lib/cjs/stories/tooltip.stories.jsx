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
    title: "Test/Tooltip",
    component: react_3.Tooltip,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_3.Tooltip label="Hey, I'm here!" aria-label="A tooltip">
        Hover me
      </react_3.Tooltip>
      <react_3.Tooltip label="Phone number" fontSize="md">
        <span>
          <react_3.Icon as={ri_1.RiPhoneFill}/>
        </span>
      </react_3.Tooltip>
      <react_3.Tooltip hasArrow label="Call me" fontSize="md">
        <span>
          <react_3.Icon as={ri_1.RiPhoneFill}/>
        </span>
      </react_3.Tooltip>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
