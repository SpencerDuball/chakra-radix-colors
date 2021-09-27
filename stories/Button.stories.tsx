import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, Button, useColorMode } from "@chakra-ui/react";

export default {
  title: "Test/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Grid autoFlow="column" h="full" w="full">
      <Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max">
        Hello
      </Button>
      <Button size="md" onClick={toggleColorMode} colorScheme="olive" w="max">
        Hello
      </Button>
      <Button size="md" onClick={toggleColorMode} colorScheme="slate" w="max">
        Hello
      </Button>
      <Button size="md" onClick={toggleColorMode} colorScheme="sand" w="max">
        Hello
      </Button>
    </Grid>
  );
};

export const Primary = Template.bind({});
