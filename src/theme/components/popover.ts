import { popoverAnatomy as parts } from "@chakra-ui/anatomy";
import type {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { cssVar, mode } from "@chakra-ui/theme-tools";

const $popperBg = cssVar("popper-bg");

const $arrowBg = cssVar("popper-arrow-bg");
const $arrowShadowColor = cssVar("popper-arrow-shadow-color");

const baseStyleContent: SystemStyleFunction = (props) => {
  const bg = mode("defaultgray.2", "defaultgrayDark.2")(props);
  const shadowColor = mode("defaultgray.4", "defaultgrayDark.4")(props);

  return {
    [$popperBg.variable]: `colors.${bg}`,
    bg: $popperBg.reference,
    [$arrowBg.variable]: $popperBg.reference,
    [$arrowShadowColor.variable]: `colors.${shadowColor}`,
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  content: baseStyleContent(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
