"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const $bg = (0, theme_tools_1.cssVar)("tooltip-bg");
const $arrowBg = (0, theme_tools_1.cssVar)("popper-arrow-bg");
const baseStyle = (props) => {
    const bg = (0, theme_tools_1.mode)("defaultgrayDark.10", "defaultgray.10")(props);
    return {
        [$bg.variable]: `colors.${bg}`,
        bg: [$bg.reference],
        [$arrowBg.variable]: [$bg.reference],
        color: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
    };
};
exports.default = {
    baseStyle,
};
