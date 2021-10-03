import { extendTheme } from "@chakra-ui/react";
import * as colorsModule from "@radix-ui/colors";
import styles from "./styles";
import {
  Accordion,
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  CloseButton,
  Code,
  Drawer,
  FormError,
  Form,
  Input,
  Kbd,
  Menu,
  Modal,
  NumberInput,
  Popover,
  Progress,
  Radio,
  Select,
  Skeleton,
  SkipLink,
  Slider,
  Switch,
  Table,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
} from "./components";

// turn colorsModule into object
const colors = Object.fromEntries(
  Object.entries(colorsModule).map(([key, value]) => [
    key,
    Object.fromEntries(
      Object.entries(value).map(([colorKey, colorValue]) => [
        colorKey.match(/[0-9]+$/)![0],
        colorValue,
      ])
    ),
  ])
);

// override the default styles
export const overrides = {
  colors: {
    ...colors,
    defaultgray: {
      ...colors.slate,
    },
    defaultgrayA: {
      ...colors.slateA,
    },
    defaultgrayDark: {
      ...colors.slateDark,
    },
    defaultgrayDarkA: {
      ...colors.slateDarkA,
    },
  },
  components: {
    Accordion,
    Alert,
    Avatar,
    Badge,
    Button,
    Checkbox,
    CloseButton,
    Code,
    Drawer,
    FormError,
    Form,
    Input,
    Kbd,
    Menu,
    Modal,
    NumberInput,
    Popover,
    Progress,
    Radio,
    Select,
    Skeleton,
    SkipLink,
    Slider,
    Switch,
    Table,
    Tabs,
    Tag,
    Textarea,
    Tooltip,
  },
  styles,
  config: {
    initialColorMode: "light",
  },
};

// create theme
export const theme = extendTheme(overrides);
theme.colors = overrides.colors; // remove the default @chakra-ui colors
