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
interface ColorScaleI {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
}
interface ColorsI {
  // gray
  gray: ColorScaleI;
  grayA: ColorScaleI;
  grayDark: ColorScaleI;
  grayDarkA: ColorScaleI;
  // mauve
  mauve: ColorScaleI;
  mauveA: ColorScaleI;
  mauveDark: ColorScaleI;
  mauveDarkA: ColorScaleI;
  // slate
  slate: ColorScaleI;
  slateA: ColorScaleI;
  slateDark: ColorScaleI;
  slateDarkA: ColorScaleI;
  // sage
  sage: ColorScaleI;
  sageA: ColorScaleI;
  sageDark: ColorScaleI;
  sageDarkA: ColorScaleI;
  // olive
  olive: ColorScaleI;
  oliveA: ColorScaleI;
  oliveDark: ColorScaleI;
  oliveDarkA: ColorScaleI;
  // sand
  sand: ColorScaleI;
  sandA: ColorScaleI;
  sandDark: ColorScaleI;
  sandDarkA: ColorScaleI;
  // tomato
  tomato: ColorScaleI;
  tomatoA: ColorScaleI;
  tomatoDark: ColorScaleI;
  tomatoDarkA: ColorScaleI;
  // red
  red: ColorScaleI;
  redA: ColorScaleI;
  redDark: ColorScaleI;
  redDarkA: ColorScaleI;
  // crimson
  crimson: ColorScaleI;
  crimsonA: ColorScaleI;
  crimsonDark: ColorScaleI;
  crimsonDarkA: ColorScaleI;
  // pink
  pink: ColorScaleI;
  pinkA: ColorScaleI;
  pinkDark: ColorScaleI;
  pinkDarkA: ColorScaleI;
  // plum
  plum: ColorScaleI;
  plumA: ColorScaleI;
  plumDark: ColorScaleI;
  plumDarkA: ColorScaleI;
  // purple
  purple: ColorScaleI;
  purpleA: ColorScaleI;
  purpleDark: ColorScaleI;
  purpleDarkA: ColorScaleI;
  // violet
  violet: ColorScaleI;
  violetA: ColorScaleI;
  violetDark: ColorScaleI;
  violetDarkA: ColorScaleI;
  // indigo
  indigo: ColorScaleI;
  indigoA: ColorScaleI;
  indigoDark: ColorScaleI;
  indigoDarkA: ColorScaleI;
  // blue
  blue: ColorScaleI;
  blueA: ColorScaleI;
  blueDark: ColorScaleI;
  blueDarkA: ColorScaleI;
  // cyan
  cyan: ColorScaleI;
  cyanA: ColorScaleI;
  cyanDark: ColorScaleI;
  cyanDarkA: ColorScaleI;
  // teal
  teal: ColorScaleI;
  tealA: ColorScaleI;
  tealDark: ColorScaleI;
  tealDarkA: ColorScaleI;
  // green
  green: ColorScaleI;
  greenA: ColorScaleI;
  greenDark: ColorScaleI;
  greenDarkA: ColorScaleI;
  // grass
  grass: ColorScaleI;
  grassA: ColorScaleI;
  grassDark: ColorScaleI;
  grassDarkA: ColorScaleI;
  // brown
  brown: ColorScaleI;
  brownA: ColorScaleI;
  brownDark: ColorScaleI;
  brownDarkA: ColorScaleI;
  // orange
  orange: ColorScaleI;
  orangeA: ColorScaleI;
  orangeDark: ColorScaleI;
  orangeDarkA: ColorScaleI;
  // sky
  sky: ColorScaleI;
  skyA: ColorScaleI;
  skyDark: ColorScaleI;
  skyDarkA: ColorScaleI;
  // mint
  mint: ColorScaleI;
  mintA: ColorScaleI;
  mintDark: ColorScaleI;
  mintDarkA: ColorScaleI;
  // lime
  lime: ColorScaleI;
  limeA: ColorScaleI;
  limeDark: ColorScaleI;
  limeDarkA: ColorScaleI;
  // yellow
  yellow: ColorScaleI;
  yellowA: ColorScaleI;
  yellowDark: ColorScaleI;
  yellowDarkA: ColorScaleI;
  // amber
  amber: ColorScaleI;
  amberA: ColorScaleI;
  amberDark: ColorScaleI;
  amberDarkA: ColorScaleI;
  // gold
  gold: ColorScaleI;
  goldA: ColorScaleI;
  goldDark: ColorScaleI;
  goldDarkA: ColorScaleI;
  // bronze
  bronze: ColorScaleI;
  bronzeA: ColorScaleI;
  bronzeDark: ColorScaleI;
  bronzeDarkA: ColorScaleI;
}
const colors = (Object.fromEntries(
  Object.entries(colorsModule).map(([key, value]) => [
    key,
    Object.fromEntries(
      Object.entries(value).map(([colorKey, colorValue]) => [
        colorKey.match(/[0-9]+$/)![0],
        colorValue,
      ])
    ),
  ])
) as unknown) as ColorsI;

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
