import React from "react";
import { VStack, HStack, Divider, Text, Button, useColorMode, } from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import { RiAncientGateFill } from "react-icons/ri";
export default {
    title: "Test/Checkbox",
    component: Checkbox,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <HStack alignItems="start" gridGap="8">
        <VStack>
          <Text as="p">Checked</Text>
          <Checkbox defaultIsChecked colorScheme="tomato">
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="tomatoDark">
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="mint">
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="mintDark">
            Checkbox
          </Checkbox>
        </VStack>
        <VStack>
          <Text as="p">Disabled</Text>
          <Checkbox isDisabled defaultIsChecked colorScheme="tomato">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled defaultIsChecked colorScheme="tomatoDark">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled defaultIsChecked colorScheme="mint">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled defaultIsChecked colorScheme="mintDark">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled colorScheme="tomato">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled colorScheme="tomatoDark">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled colorScheme="mint">
            Checkbox
          </Checkbox>
          <Checkbox isDisabled colorScheme="mintDark">
            Checkbox
          </Checkbox>
        </VStack>
        <VStack>
          <Text as="p">Invalid</Text>
          <Checkbox isInvalid colorScheme="green">
            Checkbox
          </Checkbox>
          <Checkbox isInvalid defaultIsChecked colorScheme="greenDark">
            Checkbox
          </Checkbox>
          <Checkbox isInvalid colorScheme="sky">
            Checkbox
          </Checkbox>
          <Checkbox isInvalid defaultIsChecked colorScheme="skyDark">
            Checkbox
          </Checkbox>
        </VStack>
        <VStack>
          <Text as="p">Icon</Text>
          <Checkbox defaultIsChecked colorScheme="tomato" icon={<RiAncientGateFill />}>
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="tomatoDark" icon={<RiAncientGateFill />}>
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="mint" icon={<RiAncientGateFill />}>
            Checkbox
          </Checkbox>
          <Checkbox defaultIsChecked colorScheme="mintDark" icon={<RiAncientGateFill />}>
            Checkbox
          </Checkbox>
        </VStack>
      </HStack>
    </VStack>);
};
export const Primary = Template.bind({});
