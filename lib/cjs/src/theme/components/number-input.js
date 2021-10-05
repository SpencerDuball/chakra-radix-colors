"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleStepper = (props) => {
    return {
        borderStartColor: "inherit",
        color: (0, theme_tools_1.mode)("defaultgray.12", "white")(props),
        _active: {
            bg: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
        },
    };
};
const baseStyle = (props) => ({
    stepper: baseStyleStepper(props),
});
exports.default = {
    parts: anatomy_1.numberInputAnatomy.keys,
    baseStyle,
};
