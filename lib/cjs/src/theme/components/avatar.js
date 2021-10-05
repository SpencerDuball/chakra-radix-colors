"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyleBadge = (props) => {
    return {
        transform: "translate(25%, 25%)",
        borderRadius: "full",
        border: "0.2em solid",
        borderColor: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
    };
};
const baseStyleExcessLabel = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
    };
};
const baseStyleContainer = (props) => {
    const { name, theme } = props;
    const bg = name
        ? (0, theme_tools_1.randomColor)({ string: name })
        : (0, theme_tools_1.mode)("defaultgray.8", "defaultgrayDark.8")(props);
    const isBgDark = (0, theme_tools_1.isDark)(bg)(theme);
    let color = "white";
    if (!isBgDark)
        color = "defaultgray.12";
    const borderColor = (0, theme_tools_1.mode)("white", "defaultgray.12")(props);
    return {
        bg,
        color,
        borderColor,
    };
};
const baseStyle = (props) => ({
    badge: baseStyleBadge(props),
    excessLabel: baseStyleExcessLabel(props),
    container: baseStyleContainer(props),
});
exports.default = {
    baseStyle,
};
