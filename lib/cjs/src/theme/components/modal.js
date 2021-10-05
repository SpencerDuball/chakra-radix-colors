"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleOverlay = {
    bg: "blackA.10",
};
const baseStyleDialog = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("white", "defaultgrayDark.2")(props),
    };
};
const baseStyle = (props) => ({
    overlay: baseStyleOverlay,
    dialog: baseStyleDialog(props),
});
exports.default = {
    parts: anatomy_1.modalAnatomy.keys,
    baseStyle,
};
