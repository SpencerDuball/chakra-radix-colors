import { formErrorAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleText: SystemStyleFunction = (props) => {
  return {
    color: mode("red.9", "redDark.9")(props),
  };
};

const baseStyleIcon: SystemStyleFunction = (props) => {
  return {
    color: mode("red.9", "redDark.9")(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  text: baseStyleText(props),
  icon: baseStyleIcon(props),
});

export default {
  baseStyle,
};
