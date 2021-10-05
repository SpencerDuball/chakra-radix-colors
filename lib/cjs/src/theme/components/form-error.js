"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleText = (props) => {
    return {
        color: (0, theme_tools_1.mode)("red.9", "redDark.9")(props),
    };
};
const baseStyleIcon = (props) => {
    return {
        color: (0, theme_tools_1.mode)("red.9", "redDark.9")(props),
    };
};
const baseStyle = (props) => ({
    text: baseStyleText(props),
    icon: baseStyleIcon(props),
});
exports.default = {
    baseStyle,
};
