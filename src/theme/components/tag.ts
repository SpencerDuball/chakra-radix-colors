import { tagAnatomy as parts } from "@chakra-ui/anatomy";
import type { PartsStyleInterpolation } from "@chakra-ui/theme-tools";
import Badge from "./badge";

const variants: Record<string, PartsStyleInterpolation<typeof parts>> = {
  subtle: (props) => ({
    container: Badge.variants.subtle(props),
  }),
  solid: (props) => ({
    container: Badge.variants.solid(props),
  }),
  outline: (props) => ({
    container: Badge.variants.outline(props),
  }),
};

export default {
  parts: parts.keys,
  variants,
};
