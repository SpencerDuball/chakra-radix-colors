import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  PartsStyleInterpolation,
} from "@chakra-ui/theme-tools";
import { getColor, mode } from "@chakra-ui/theme-tools";
import { getColorPair } from "../../util/tools";

const variantLine: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);

  return {
    tab: {
      _selected: {
        color: mode(`${lightC}.10`, `${darkC}.10`)(props),
      },
      _active: {
        bg: mode("defaultgray.6", "defaultgrayDark.6")(props),
      },
    },
  };
};

const variantEnclosed: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);
  return {
    tab: {
      _selected: {
        color: mode(`${lightC}.10`, `${darkC}.10`)(props),
        borderBottomColor: mode(`white`, `defaultgray.12`)(props),
      },
    },
  };
};

const variantEnclosedColored: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);
  return {
    tab: {
      bg: "none",
      _selected: {
        bg: mode("white", "defaultgray.12")(props),
        color: mode(`${lightC}.10`, `${darkC}.10`)(props),
      },
    },
  };
};

const variantSoftRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, theme } = props;
  const [lightC, darkC] = getColorPair(c, theme);
  return {
    tab: {
      color: "defaultgray.10",
      _selected: {
        color: getColor(theme, `${lightC}.11`),
        bg: getColor(theme, `${lightC}.4`),
      },
    },
  };
};

const variantSolidRounded: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);
  return {
    tab: {
      color: mode("defaultgray.10", "inherit")(props),
      _selected: {
        color: mode(`white`, "defaultgray.12")(props),
        bg: mode(`${lightC}.10`, `${darkC}.10`)(props),
      },
    },
  };
};
const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  line: variantLine,
  enclosed: variantEnclosed,
  "enclosed-colored": variantEnclosedColored,
  "soft-rounded": variantSoftRounded,
  "solid-rounded": variantSolidRounded,
};

export default {
  parts: parts.keys,
  variants,
};
