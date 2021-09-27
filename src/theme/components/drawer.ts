import { drawerAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";

const baseStyleOverlay: SystemStyleObject = {
  bg: "blackA.10",
  zIndex: "overlay",
};

const baseStyleDialog: SystemStyleFunction = (props) => {
  const { isFullHeight } = props;

  return {
    ...(isFullHeight && { height: "100vh" }),
    zIndex: "modal",
    maxH: "100vh",
    bg: mode("white", "defaultgrayDark.2")(props),
    color: "inherit",
    boxShadow: mode("lg", "dark-lg")(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  overlay: baseStyleOverlay,
  dialog: baseStyleDialog(props),
});

export default {
  baseStyle,
};
