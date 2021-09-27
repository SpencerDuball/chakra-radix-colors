import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import { getColorPair } from "../../util/tools";

function getBg(props: StyleFunctionProps): string {
  const { theme, colorScheme: c } = props;
  const [lightBg, darkBg] = getColorPair(c, theme);
  return mode(`${lightBg}.5`, `${darkBg}.5`)(props);
}

const variantSubtle: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightBg, darkBg] = getColorPair(c, theme);
  return {
    container: { bg: getBg(props) },
    icon: { color: mode(`${lightBg}.9`, `${darkBg}.9`)(props) },
  };
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightBg, darkBg] = getColorPair(c, theme);
  return {
    container: {
      borderStartColor: mode(`${lightBg}.9`, `${darkBg}.9`)(props),
      bg: getBg(props),
    },
    icon: {
      color: mode(`${lightBg}.9`, `${darkBg}.9`)(props),
    },
  };
};

const variantTopAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightBg, darkBg] = getColorPair(c, theme);
  return {
    container: {
      borderTopColor: mode(`${lightBg}.9`, `${darkBg}.9`)(props),
      bg: getBg(props),
    },
    icon: {
      color: mode(`${lightBg}.9`, `${darkBg}.9`)(props),
    },
  };
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightBg, darkBg] = getColorPair(c, theme);
  return {
    container: {
      bg: mode(`${lightBg}.9`, `${darkBg}.9`)(props),
      color: mode(`white`, `defaultgray.12`)(props),
    },
  };
};

const variants = {
  subtle: variantSubtle,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
  solid: variantSolid,
};

export default {
  variants,
};
