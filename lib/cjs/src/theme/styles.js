"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const styles = {
    global: (props) => ({
        body: {
            color: (0, theme_tools_1.mode)("defaultgray.12", "white")(props),
            bg: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
        },
        "*::placeholder": {
            color: (0, theme_tools_1.mode)("defaultgray.9", "defaultgrayDark.9")(props),
        },
        "*, *::before, &::after": {
            borderColor: (0, theme_tools_1.mode)("defaultgray.6", "defaultgrayDark.6")(props),
        },
    }),
};
exports.default = styles;
