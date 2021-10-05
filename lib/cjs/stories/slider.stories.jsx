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
    title: "Test/Slider",
    component: react_3.Slider,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.HStack>
        <react_2.VStack>
          <react_3.Slider aria-label="slider-ex-1" colorScheme="pink" defaultValue={30} w="md">
            <react_3.SliderTrack>
              <react_3.SliderFilledTrack />
            </react_3.SliderTrack>
            <react_3.SliderThumb />
          </react_3.Slider>
          <react_3.Slider aria-label="slider-ex-1" colorScheme="pinkDark" defaultValue={30} w="md">
            <react_3.SliderTrack>
              <react_3.SliderFilledTrack />
            </react_3.SliderTrack>
            <react_3.SliderThumb />
          </react_3.Slider>
        </react_2.VStack>
        <react_2.VStack>
          <react_3.Slider aria-label="slider-ex-1" colorScheme="amber" defaultValue={30} w="md">
            <react_3.SliderTrack>
              <react_3.SliderFilledTrack />
            </react_3.SliderTrack>
            <react_3.SliderThumb />
          </react_3.Slider>
          <react_3.Slider aria-label="slider-ex-1" colorScheme="amberDark" defaultValue={30} w="md">
            <react_3.SliderTrack>
              <react_3.SliderFilledTrack />
            </react_3.SliderTrack>
            <react_3.SliderThumb />
          </react_3.Slider>
        </react_2.VStack>
      </react_2.HStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
