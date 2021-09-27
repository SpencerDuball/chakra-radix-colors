import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
import { getColorPair } from "../../util/tools";

const variantSimple: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);

  return {
    th: {
      color: mode("defaultgray.11", "defaultgrayDark.11")(props),
      borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
    },
    td: {
      borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
    },
    caption: {
      color: mode("defaultgrayDark.10", "defaultgray.10")(props),
    },
  };
};

const variantStripe: PartsStyleFunction<typeof parts> = (props) => {
  const { theme, colorScheme: c } = props;
  const [lightC, darkC] = getColorPair(c, theme);

  return {
    th: {
      color: mode("defaultgray.11", "defaultgrayDark.11")(props),
      borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
    },
    td: {
      borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
    },
    caption: {
      color: mode("defaultgrayDark.10", "defaultgray.10")(props),
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
          },
          td: {
            background: mode(`${lightC}.6`, `${darkC}.6`)(props),
          },
        },
      },
    },
  };
};

const variants = {
  simple: variantSimple,
  striped: variantStripe,
};

export default {
  parts: parts.keys,
  variants,
};
