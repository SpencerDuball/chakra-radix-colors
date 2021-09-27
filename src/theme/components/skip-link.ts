import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = (props) => ({
  _focus: {
    bg: mode("white", "defaultgray.12")(props),
  },
});

export default {
  baseStyle,
};
