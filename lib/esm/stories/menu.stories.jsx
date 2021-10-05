import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Icon, } from "@chakra-ui/react";
import { RiAwardFill } from "react-icons/ri";
export default {
    title: "Test/Menu",
    component: Menu,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <Menu>
        <MenuButton as={Button} rightIcon={<Icon as={RiAwardFill}/>}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </VStack>);
};
export const Primary = Template.bind({});
