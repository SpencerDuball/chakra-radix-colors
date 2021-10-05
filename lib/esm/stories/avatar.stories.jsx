import React from "react";
import { VStack, HStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
export default {
    title: "Test/Avatar",
    component: Avatar,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <HStack>
        <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link"/>
        <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link"/>
        <Avatar src="http://bit.ly/broken-link"/>
      </HStack>
      <HStack>
        <Avatar>
          <AvatarBadge bg="tomato" boxSize="1.25em"/>
        </Avatar>
      </HStack>
      <HStack>
        <AvatarGroup size="md" max={2}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence"/>
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo"/>
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds"/>
          <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba"/>
          <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast"/>
        </AvatarGroup>
      </HStack>
    </VStack>);
};
export const Primary = Template.bind({});
