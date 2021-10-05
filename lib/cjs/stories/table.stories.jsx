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
    title: "Test/Table",
    component: react_3.Table,
};
const Template = (args) => {
    const { toggleColorMode } = (0, react_2.useColorMode)();
    return (<react_2.VStack w="full">
      <react_2.Button size="md" onClick={toggleColorMode} colorScheme="gray" w="max" data-cy="toggle-mode-button">
        Toggle Mode
      </react_2.Button>
      <react_2.Divider />
      <react_2.VStack>
        <react_3.Table variant="simple">
          <react_3.TableCaption>Imperial to metric conversion factors</react_3.TableCaption>
          <react_3.Thead>
            <react_3.Tr>
              <react_3.Th>To convert</react_3.Th>
              <react_3.Th>into</react_3.Th>
              <react_3.Th isNumeric>multiply by</react_3.Th>
            </react_3.Tr>
          </react_3.Thead>
          <react_3.Tbody>
            <react_3.Tr>
              <react_3.Td>inches</react_3.Td>
              <react_3.Td>millimetres (mm)</react_3.Td>
              <react_3.Td isNumeric>25.4</react_3.Td>
            </react_3.Tr>
            <react_3.Tr>
              <react_3.Td>feet</react_3.Td>
              <react_3.Td>centimetres (cm)</react_3.Td>
              <react_3.Td isNumeric>30.48</react_3.Td>
            </react_3.Tr>
            <react_3.Tr>
              <react_3.Td>yards</react_3.Td>
              <react_3.Td>metres (m)</react_3.Td>
              <react_3.Td isNumeric>0.91444</react_3.Td>
            </react_3.Tr>
          </react_3.Tbody>
          <react_3.Tfoot>
            <react_3.Tr>
              <react_3.Th>To convert</react_3.Th>
              <react_3.Th>into</react_3.Th>
              <react_3.Th isNumeric>multiply by</react_3.Th>
            </react_3.Tr>
          </react_3.Tfoot>
        </react_3.Table>
        <react_2.HStack>
          <react_3.Table variant="striped" colorScheme="teal">
            <react_3.TableCaption>Imperial to metric conversion factors</react_3.TableCaption>
            <react_3.Thead>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Thead>
            <react_3.Tbody>
              <react_3.Tr>
                <react_3.Td>inches</react_3.Td>
                <react_3.Td>millimetres (mm)</react_3.Td>
                <react_3.Td isNumeric>25.4</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>feet</react_3.Td>
                <react_3.Td>centimetres (cm)</react_3.Td>
                <react_3.Td isNumeric>30.48</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>yards</react_3.Td>
                <react_3.Td>metres (m)</react_3.Td>
                <react_3.Td isNumeric>0.91444</react_3.Td>
              </react_3.Tr>
            </react_3.Tbody>
            <react_3.Tfoot>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Tfoot>
          </react_3.Table>
          <react_3.Table variant="striped" colorScheme="tealDark">
            <react_3.TableCaption>Imperial to metric conversion factors</react_3.TableCaption>
            <react_3.Thead>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Thead>
            <react_3.Tbody>
              <react_3.Tr>
                <react_3.Td>inches</react_3.Td>
                <react_3.Td>millimetres (mm)</react_3.Td>
                <react_3.Td isNumeric>25.4</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>feet</react_3.Td>
                <react_3.Td>centimetres (cm)</react_3.Td>
                <react_3.Td isNumeric>30.48</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>yards</react_3.Td>
                <react_3.Td>metres (m)</react_3.Td>
                <react_3.Td isNumeric>0.91444</react_3.Td>
              </react_3.Tr>
            </react_3.Tbody>
            <react_3.Tfoot>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Tfoot>
          </react_3.Table>
        </react_2.HStack>
        <react_2.HStack>
          <react_3.Table variant="striped" colorScheme="amber">
            <react_3.TableCaption>Imperial to metric conversion factors</react_3.TableCaption>
            <react_3.Thead>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Thead>
            <react_3.Tbody>
              <react_3.Tr>
                <react_3.Td>inches</react_3.Td>
                <react_3.Td>millimetres (mm)</react_3.Td>
                <react_3.Td isNumeric>25.4</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>feet</react_3.Td>
                <react_3.Td>centimetres (cm)</react_3.Td>
                <react_3.Td isNumeric>30.48</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>yards</react_3.Td>
                <react_3.Td>metres (m)</react_3.Td>
                <react_3.Td isNumeric>0.91444</react_3.Td>
              </react_3.Tr>
            </react_3.Tbody>
            <react_3.Tfoot>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Tfoot>
          </react_3.Table>
          <react_3.Table variant="striped" colorScheme="amberDark">
            <react_3.TableCaption>Imperial to metric conversion factors</react_3.TableCaption>
            <react_3.Thead>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Thead>
            <react_3.Tbody>
              <react_3.Tr>
                <react_3.Td>inches</react_3.Td>
                <react_3.Td>millimetres (mm)</react_3.Td>
                <react_3.Td isNumeric>25.4</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>feet</react_3.Td>
                <react_3.Td>centimetres (cm)</react_3.Td>
                <react_3.Td isNumeric>30.48</react_3.Td>
              </react_3.Tr>
              <react_3.Tr>
                <react_3.Td>yards</react_3.Td>
                <react_3.Td>metres (m)</react_3.Td>
                <react_3.Td isNumeric>0.91444</react_3.Td>
              </react_3.Tr>
            </react_3.Tbody>
            <react_3.Tfoot>
              <react_3.Tr>
                <react_3.Th>To convert</react_3.Th>
                <react_3.Th>into</react_3.Th>
                <react_3.Th isNumeric>multiply by</react_3.Th>
              </react_3.Tr>
            </react_3.Tfoot>
          </react_3.Table>
        </react_2.HStack>
      </react_2.VStack>
    </react_2.VStack>);
};
exports.Primary = Template.bind({});
