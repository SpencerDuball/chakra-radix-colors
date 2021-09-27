import { checkboxAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import { getColorPair } from "../../util/tools";

const baseStyleControl: SystemStyleFunction = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);

  return {
    color: "white",

    _checked: {
      bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
      borderColor: mode(`${lightC}.9`, `${darkC}.9`)(props),
      color: mode("white", "defaultgray.12")(props),

      _hover: {
        bg: mode(`${lightC}.10`, `${darkC}.10`)(props),
        borderColor: mode(`${lightC}.10`, `${darkC}.10`)(props),
      },

      _disabled: {
        borderColor: mode("defaultgray.5", "defaultgrayDark.5")(props),
        bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
        color: mode("defaultgray.9", "defaultgrayDark.9")(props),
      },
    },

    _indeterminate: {
      bg: mode(`${c}.500`, `${c}.200`)(props),
      borderColor: mode(`${c}.500`, `${c}.200`)(props),
      color: mode("white", "defaultgray.900")(props),
    },

    _disabled: {
      bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
      borderColor: mode("defaultgray.4", "defaultgrayDark.4")(props),
    },

    _focus: {
      boxShadow: "outline",
    },

    _invalid: {
      borderColor: mode("red.9", "redDark.9")(props),
    },
  };
};

const baseStyleLabel: SystemStyleObject = {
  userSelect: "none",
  _disabled: { opacity: 0.4 },
};

const baseStyleIcon: SystemStyleObject = {
  transitionProperty: "transform",
  transitionDuration: "normal",
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  icon: baseStyleIcon,
  control: baseStyleControl(props),
  label: baseStyleLabel,
});

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    control: { h: 3, w: 3 },
    label: { fontSize: "sm" },
    icon: { fontSize: "0.45rem" },
  },
  md: {
    control: { w: 4, h: 4 },
    label: { fontSize: "md" },
    icon: { fontSize: "0.625rem" },
  },
  lg: {
    control: { w: 5, h: 5 },
    label: { fontSize: "lg" },
    icon: { fontSize: "0.625rem" },
  },
};

const defaultProps = {
  size: "md",
  colorScheme: "blue",
};

export default {
  parts: parts.keys,
  baseStyle,
  sizes,
  defaultProps,
};
