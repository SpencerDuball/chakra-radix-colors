import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  VStack,
  HStack,
  Divider,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export default {
  title: "Test/Slider",
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => {
  const { toggleColorMode } = useColorMode();
  return (
    <VStack w="full">
      <Button
        size="md"
        onClick={toggleColorMode}
        colorScheme="gray"
        w="max"
        data-cy="toggle-mode-button"
      >
        Toggle Mode
      </Button>
      <Divider />
      <HStack>
        <VStack>
          <Slider
            aria-label="slider-ex-1"
            colorScheme="pink"
            defaultValue={30}
            w="md"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Slider
            aria-label="slider-ex-1"
            colorScheme="pinkDark"
            defaultValue={30}
            w="md"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
        <VStack>
          <Slider
            aria-label="slider-ex-1"
            colorScheme="amber"
            defaultValue={30}
            w="md"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Slider
            aria-label="slider-ex-1"
            colorScheme="amberDark"
            defaultValue={30}
            w="md"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
      </HStack>
    </VStack>
  );
};

export const Primary = Template.bind({});
