"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const $popperBg = (0, theme_tools_1.cssVar)("popper-bg");
const $arrowBg = (0, theme_tools_1.cssVar)("popper-arrow-bg");
const $arrowShadowColor = (0, theme_tools_1.cssVar)("popper-arrow-shadow-color");
const baseStyleContent = (props) => {
    const bg = (0, theme_tools_1.mode)("defaultgray.2", "defaultgrayDark.2")(props);
    const shadowColor = (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props);
    return {
        [$popperBg.variable]: `colors.${bg}`,
        bg: $popperBg.reference,
        [$arrowBg.variable]: $popperBg.reference,
        [$arrowShadowColor.variable]: `colors.${shadowColor}`,
    };
};
const baseStyle = (props) => ({
    content: baseStyleContent(props),
});
exports.default = {
    parts: anatomy_1.popoverAnatomy.keys,
    baseStyle,
};
