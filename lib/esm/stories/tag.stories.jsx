import React from "react";
import { VStack, HStack, Divider, Button, useColorMode, } from "@chakra-ui/react";
import { Tag, TagLabel, TagLeftIcon, TagCloseButton, } from "@chakra-ui/react";
import { RiHospitalFill } from "react-icons/ri";
export default {
    title: "Test/Tag",
    component: Tag,
};
const Template = (args) => {
    const { toggleColorMode } = useColorMode();
    return (<VStack w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </Button>
      <Divider />
      <VStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="solid" colorScheme="cyan">
              <TagLeftIcon boxSize="12px" as={RiHospitalFill}/>
              <TagLabel>Cyan</TagLabel>
            </Tag>))}
        </HStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="solid" colorScheme="cyanDark">
              <TagLeftIcon boxSize="12px" as={RiHospitalFill}/>
              <TagLabel>Cyan</TagLabel>
            </Tag>))}
        </HStack>
      </VStack>
      <VStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="subtle" colorScheme="amber">
              <TagLeftIcon boxSize="12px" as={RiHospitalFill}/>
              <TagLabel>Cyan</TagLabel>
            </Tag>))}
        </HStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="subtle" colorScheme="amberDark">
              <TagLeftIcon boxSize="12px" as={RiHospitalFill}/>
              <TagLabel>Cyan</TagLabel>
            </Tag>))}
        </HStack>
      </VStack>
      <VStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="outline" colorScheme="purple">
              <TagLabel>Cyan</TagLabel>
              <TagCloseButton />
            </Tag>))}
        </HStack>
        <HStack spacing={4}>
          {["sm", "md", "lg"].map((size) => (<Tag size={size} key={size} variant="outline" colorScheme="purpleDark">
              <TagLeftIcon boxSize="12px" as={RiHospitalFill}/>
              <TagLabel>Cyan</TagLabel>
            </Tag>))}
        </HStack>
      </VStack>
    </VStack>);
};
export const Primary = Template.bind({});
