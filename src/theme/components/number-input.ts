import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleStepper: SystemStyleFunction = (props) => {
  return {
    borderStartColor: "inherit",
    color: mode("defaultgray.12", "white")(props),
    _active: {
      bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
    },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  stepper: baseStyleStepper(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
