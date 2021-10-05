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
    title: "Test/Tag",
    component: react_3.Tag,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.VStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="solid" colorScheme="cyan">
              <react_3.TagLeftIcon boxSize="12px" as={ri_1.RiHospitalFill}/>
              <react_3.TagLabel>Cyan</react_3.TagLabel>
            </react_3.Tag>))}
        </react_2.HStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="solid" colorScheme="cyanDark">
              <react_3.TagLeftIcon boxSize="12px" as={ri_1.RiHospitalFill}/>
              <react_3.TagLabel>Cyan</react_3.TagLabel>
            </react_3.Tag>))}
        </react_2.HStack>
      </react_2.VStack>
      <react_2.VStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="subtle" colorScheme="amber">
              <react_3.TagLeftIcon boxSize="12px" as={ri_1.RiHospitalFill}/>
              <react_3.TagLabel>Cyan</react_3.TagLabel>
            </react_3.Tag>))}
        </react_2.HStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="subtle" colorScheme="amberDark">
              <react_3.TagLeftIcon boxSize="12px" as={ri_1.RiHospitalFill}/>
              <react_3.TagLabel>Cyan</react_3.TagLabel>
            </react_3.Tag>))}
        </react_2.HStack>
      </react_2.VStack>
      <react_2.VStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="outline" colorScheme="purple">
              <react_3.TagLabel>Cyan</react_3.TagLabel>
              <react_3.TagCloseButton />
            </react_3.Tag>))}
        </react_2.HStack>
        <react_2.HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<react_3.Tag size={size} key={size} variant="outline" colorScheme="purpleDark">
              <react_3.TagLeftIcon boxSize="12px" as={ri_1.RiHospitalFill}/>
              <react_3.TagLabel>Cyan</react_3.TagLabel>
            </react_3.Tag>))}
        </react_2.HStack>
      </react_2.VStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
