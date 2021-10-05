"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleOverlay = {
    bg: "blackA.10",
    zIndex: "overlay",
};
const baseStyleDialog = (props) => {
    const { isFullHeight } = props;
    return Object.assign(Object.assign({}, (isFullHeight && { height: "100vh" })), { zIndex: "modal", maxH: "100vh", bg: (0, theme_tools_1.mode)("white", "defaultgrayDark.2")(props), color: "inherit", boxShadow: (0, theme_tools_1.mode)("lg", "dark-lg")(props) });
};
const baseStyle = (props) => ({
    overlay: baseStyleOverlay,
    dialog: baseStyleDialog(props),
});
exports.default = {
    baseStyle,
};
