import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleList: SystemStyleFunction = (props) => {
  return {
    bg: mode("white", "defaultgrayDark.2")(props),
    boxShadow: mode("sm", "dark-lg")(props),
  };
};

const baseStyleItem: SystemStyleFunction = (props) => {
  return {
    _focus: {
      bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
    },
    _active: {
      bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
    },
    _expanded: {
      bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  list: baseStyleList(props),
  item: baseStyleItem(props),
  baseButtonStyle,
});

const baseButtonStyle: SystemStyleObject = {
  colorScheme: "defaultgray",
};

export default {
  parts: parts.keys,
  baseStyle,
};
