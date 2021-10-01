import { alertAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";

function getBg(props: StyleFunctionProps): string {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return mode(`${lightC}.5`, `${darkC}.5`)(props);
}

const variantSubtle: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return {
    container: {
      bg: getBg(props),
      color: mode(`${lightC}.12`, `${lightC}.1`)(props),
    },
    icon: { color: mode(`${lightC}.9`, `${darkC}.9`)(props) },
  };
};

const variantLeftAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return {
    container: {
      borderStartColor: mode(`${lightC}.9`, `${darkC}.9`)(props),
      bg: getBg(props),
      color: mode(`${lightC}.12`, `${lightC}.1`)(props),
    },
    icon: {
      color: mode(`${lightC}.9`, `${darkC}.9`)(props),
    },
  };
};

const variantTopAccent: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return {
    container: {
      borderTopColor: mode(`${lightC}.9`, `${darkC}.9`)(props),
      bg: getBg(props),
      color: mode(`${lightC}.12`, `${lightC}.1`)(props),
    },
    icon: {
      color: mode(`${lightC}.9`, `${darkC}.9`)(props),
    },
  };
};

const variantSolid: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return {
    container: {
      bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
      color: mode(`${lightC}.12`, `${lightC}.1`)(props),
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
