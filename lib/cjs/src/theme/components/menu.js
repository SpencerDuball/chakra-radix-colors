"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleList = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("white", "defaultgrayDark.2")(props),
        boxShadow: (0, theme_tools_1.mode)("sm", "dark-lg")(props),
    };
};
const baseStyleItem = (props) => {
    return {
        _focus: {
            bg: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
        },
        _active: {
            bg: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
        },
        _expanded: {
            bg: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
        },
    };
};
const baseStyle = (props) => ({
    list: baseStyleList(props),
    item: baseStyleItem(props),
    baseButtonStyle,
});
const baseButtonStyle = {
    colorScheme: "defaultgray",
};
exports.default = {
    parts: anatomy_1.menuAnatomy.keys,
    baseStyle,
};
