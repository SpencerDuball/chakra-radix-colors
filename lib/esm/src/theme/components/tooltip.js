import { mode, cssVar } from "@chakra-ui/theme-tools";
const $bg = cssVar("tooltip-bg");
const $arrowBg = cssVar("popper-arrow-bg");
const baseStyle = (props) => {
    const bg = mode("defaultgrayDark.10", "defaultgray.10")(props);
    return {
        [$bg.variable]: `colors.${bg}`,
        bg: [$bg.reference],
        [$arrowBg.variable]: [$bg.reference],
        color: mode("white", "defaultgray.12")(props),
    };
};
export default {
    baseStyle,
};
