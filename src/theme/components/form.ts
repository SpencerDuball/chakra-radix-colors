import { formAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleRequiredIndicator: SystemStyleFunction = (props) => {
  return {
    color: mode("red.9", "redDark.9")(props),
  };
};

const baseStyleHelperText: SystemStyleFunction = (props) => {
  return {
    color: mode("defaultgray.9", "defaultgrayDark.9")(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  requiredIndicator: baseStyleRequiredIndicator(props),
  helperText: baseStyleHelperText(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
