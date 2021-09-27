import type { SystemStyleInterpolation } from "@chakra-ui/theme-tools";
import Input from "./Input";

const variants: Record<string, SystemStyleInterpolation> = {
  outline: (props) => Input.variants.outline(props).field ?? {},
  flushed: (props) => Input.variants.flushed(props).field ?? {},
  filled: (props) => Input.variants.filled(props).field ?? {},
};

export default {
  variants,
};
