import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";

const grays = [
  "defaultgray",
  "gray",
  "mauve",
  "slate",
  "sage",
  "olive",
  "sand",
];

const variantGhost: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);

  if (grays.includes(c))
    return {
      color: mode(`${c}.12`, `white`)(props),
      _hover: {
        bg: mode(`${c}.4`, `${c}Dark.4`)(props),
      },
      _active: {
        bg: mode(`${c}.5`, `${c}Dark.5`)(props),
      },
    };

  return {
    color: mode(`${lightC}.11`, `${darkC}.11`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${lightC}.4`, `${darkC}.4`)(props),
    },
    _active: {
      bg: mode(`${lightC}.5`, `${darkC}.5`)(props),
    },
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`${c}.6`, `${c}Dark.6`)(props);
  return {
    border: "1px solid",
    borderColor: grays.includes(c) ? borderColor : "currentColor",
    ...variantGhost(props),
  };
};

const variantSolid: SystemStyleFunction = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);

  if (grays.includes(c)) {
    const bg = mode(`${c}.4`, `${c}Dark.4`)(props);

    return {
      bg,
      color: mode(`${c}.12`, `white`)(props),
      _hover: {
        bg: mode(`${c}.5`, `${c}Dark.5`)(props),
        _disabled: {
          bg,
        },
      },
      _active: {
        bg: mode(`${c}.6`, `${c}Dark.6`)(props),
      },
    };
  }

  return {
    bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
    color: mode("white", `defaultgray.12`)(props),
    _hover: {
      bg: mode(`${lightC}.10`, `${darkC}.10`)(props),
      _disabled: {
        bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
      },
    },
    _active: { bg: mode(`${lightC}.10`, `${darkC}.10`)(props) },
  };
};

const variantLink: SystemStyleFunction = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getBaseColorPair(c, theme);
  return {
    color: mode(`${lightC}.9`, `${darkC}.9`)(props),
    _active: {
      color: mode(`${lightC}.11`, `${darkC}.11`)(props),
    },
  };
};

const variants = {
  ghost: variantGhost,
  outline: variantOutline,
  solid: variantSolid,
  link: variantLink,
};

export default {
  variants,
};
