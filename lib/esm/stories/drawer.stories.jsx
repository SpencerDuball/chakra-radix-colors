import React from "react";
import { VStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Input, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, } from "@chakra-ui/react";
export default {
    title: "Test/Drawer",
    component: Drawer,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max">
        Toggle Mode
      </Button>
      <Divider />
      <Drawer isOpen={true} onClose={() => { }} placement="right">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..."/>
            <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
              Toggle Mode
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </VStack>);
};
export const Primary = Template.bind({});
