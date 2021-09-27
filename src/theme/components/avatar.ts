import { avatarAnatomy as parts } from "@chakra-ui/anatomy";
import { isDark, mode, randomColor } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";

const baseStyleBadge: SystemStyleFunction = (props) => {
  return {
    transform: "translate(25%, 25%)",
    borderRadius: "full",
    border: "0.2em solid",
    borderColor: mode("white", "defaultgray.12")(props),
  };
};

const baseStyleExcessLabel: SystemStyleFunction = (props) => {
  return {
    bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
  };
};

const baseStyleContainer: SystemStyleFunction = (props) => {
  const { name, theme } = props;
  const bg = name
    ? randomColor({ string: name })
    : mode("defaultgray.8", "defaultgrayDark.8")(props);
  const isBgDark = isDark(bg)(theme);

  let color = "white";
  if (!isBgDark) color = "defaultgray.12";

  const borderColor = mode("white", "defaultgray.12")(props);

  return {
    bg,
    color,
    borderColor,
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  badge: baseStyleBadge(props),
  excessLabel: baseStyleExcessLabel(props),
  container: baseStyleContainer(props),
});

export default {
  baseStyle,
};
