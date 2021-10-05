"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyle = (props) => ({
    _focus: {
        bg: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
    },
});
exports.default = {
    baseStyle,
};
