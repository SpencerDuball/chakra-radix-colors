"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleRequiredIndicator = (props) => {
    return {
        color: (0, theme_tools_1.mode)("red.9", "redDark.9")(props),
    };
};
const baseStyleHelperText = (props) => {
    return {
        color: (0, theme_tools_1.mode)("defaultgray.9", "defaultgrayDark.9")(props),
    };
};
const baseStyle = (props) => ({
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props),
});
exports.default = {
    parts: anatomy_1.formAnatomy.keys,
    baseStyle,
};
