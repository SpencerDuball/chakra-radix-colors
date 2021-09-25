import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, Button, useColorMode } from "@chakra-ui/react";

export default {
  title: "Test/Buttona",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Grid w="max" autoFlow="column">
      <Button size="md" onClick={toggleColorMode} colorScheme="red">
        Hello
      </Button>
    </Grid>
  );
};

export const Primary = Template.bind({});
