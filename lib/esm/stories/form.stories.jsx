import React from "react";
import { VStack, HStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Input, FormControl, FormLabel, FormErrorMessage, FormHelperText, Radio, RadioGroup, } from "@chakra-ui/react";
export default {
    title: "Test/FormControl",
    component: FormControl,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <FormControl id="email" isRequired isInvalid>
        <FormLabel>Email address</FormLabel>
        <Input type="email"/>
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormErrorMessage>This is the form error message.</FormErrorMessage>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you're a fan.</FormHelperText>
      </FormControl>
    </VStack>);
};
export const Primary = Template.bind({});
