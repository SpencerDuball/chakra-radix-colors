"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const system_1 = require("@chakra-ui/system");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const fade = (startColor, endColor) => (0, system_1.keyframes)({
    from: { borderColor: startColor, background: startColor },
    to: { borderColor: endColor, background: endColor },
});
const baseStyle = (props) => {
    const defaultStartColor = (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props);
    const defaultEndColor = (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props);
    const { startColor = defaultStartColor, endColor = defaultEndColor, speed, theme, } = props;
    const start = (0, theme_tools_1.getColor)(theme, startColor);
    const end = (0, theme_tools_1.getColor)(theme, endColor);
    return {
        opacity: 0.7,
        borderRadius: "2px",
        borderColor: start,
        background: end,
        animation: `${speed}s linear infinite alternate ${fade(start, end)}`,
    };
};
exports.default = {
    baseStyle,
};
