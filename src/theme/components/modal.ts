import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleOverlay: SystemStyleObject = {
  bg: "blackA.10",
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  return {
    bg: mode("white", "defaultgrayDark.2")(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialog: baseStyleDialog(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
