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
    title: "Test/Checkbox",
    component: react_3.Checkbox,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.HStack alignItems="start" gridGap="8">
        <react_2.VStack>
          <react_2.Text as="p">Checked</react_2.Text>
          <react_3.Checkbox defaultIsChecked colorScheme="tomato">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="tomatoDark">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="mint">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="mintDark">
            Checkbox
          </react_3.Checkbox>
        </react_2.VStack>
        <react_2.VStack>
          <react_2.Text as="p">Disabled</react_2.Text>
          <react_3.Checkbox isDisabled defaultIsChecked colorScheme="tomato">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled defaultIsChecked colorScheme="tomatoDark">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled defaultIsChecked colorScheme="mint">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled defaultIsChecked colorScheme="mintDark">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled colorScheme="tomato">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled colorScheme="tomatoDark">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled colorScheme="mint">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isDisabled colorScheme="mintDark">
            Checkbox
          </react_3.Checkbox>
        </react_2.VStack>
        <react_2.VStack>
          <react_2.Text as="p">Invalid</react_2.Text>
          <react_3.Checkbox isInvalid colorScheme="green">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isInvalid defaultIsChecked colorScheme="greenDark">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isInvalid colorScheme="sky">
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox isInvalid defaultIsChecked colorScheme="skyDark">
            Checkbox
          </react_3.Checkbox>
        </react_2.VStack>
        <react_2.VStack>
          <react_2.Text as="p">Icon</react_2.Text>
          <react_3.Checkbox defaultIsChecked colorScheme="tomato" icon={<ri_1.RiAncientGateFill />}>
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="tomatoDark" icon={<ri_1.RiAncientGateFill />}>
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="mint" icon={<ri_1.RiAncientGateFill />}>
            Checkbox
          </react_3.Checkbox>
          <react_3.Checkbox defaultIsChecked colorScheme="mintDark" icon={<ri_1.RiAncientGateFill />}>
            Checkbox
          </react_3.Checkbox>
        </react_2.VStack>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
