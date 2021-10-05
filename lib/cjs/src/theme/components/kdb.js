"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyle = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props),
    };
};
exports.default = {
    baseStyle,
};
