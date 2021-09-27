import { selectAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import Input from "./Input";

const baseStyleField: SystemStyleFunction = (props) => {
  return {
    bg: mode("white", "defaultgray.12")(props),
    "> option, > optgroup": {
      bg: mode("white", "defaultgray.12")(props),
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  field: baseStyleField(props),
});

export default {
  parts: parts.keys,
  baseStyle,
  variants: Input.variants,
};
