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
    title: "Test/Tabs",
    component: react_3.Tabs,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_2.Text as="h1" fontWeight="bold" w="full">
          Variant Prop (default colorScheme)
        </react_2.Text>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="line">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed-colored">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="soft-rounded">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="solid-rounded">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
      </react_2.VStack>
      <react_2.Divider />
      <react_2.VStack w="full">
        <react_2.Text as="h1" fontWeight="bold" w="full">
          Variant Prop (green colorScheme)
        </react_2.Text>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="line" colorScheme="green">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed" colorScheme="green">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed-colored" colorScheme="green">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="soft-rounded" colorScheme="green" bg="white">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="solid-rounded" colorScheme="green">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
      </react_2.VStack>
      <react_2.VStack w="full">
        <react_2.Text as="h1" fontWeight="bold" w="full">
          Variant Prop (greenDark colorScheme)
        </react_2.Text>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="line" colorScheme="greenDark">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed" colorScheme="greenDark">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="enclosed-colored" colorScheme="greenDark">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
        <react_2.Grid w="full" autoFlow="column" autoColumns="1fr">
          <react_3.Tabs variant="soft-rounded" colorScheme="greenDark">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
          <react_3.Tabs variant="solid-rounded" colorScheme="greenDark">
            <react_3.TabList>
              <react_3.Tab>One</react_3.Tab>
              <react_3.Tab>Two</react_3.Tab>
            </react_3.TabList>
            <react_3.TabPanels>
              <react_3.TabPanel>
                <p>one!</p>
              </react_3.TabPanel>
              <react_3.TabPanel>
                <p>two!</p>
              </react_3.TabPanel>
            </react_3.TabPanels>
          </react_3.Tabs>
        </react_2.Grid>
      </react_2.VStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
