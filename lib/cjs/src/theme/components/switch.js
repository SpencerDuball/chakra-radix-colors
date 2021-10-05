"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const baseStyleTrack = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        bg: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
        _checked: {
            bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        },
    };
};
const baseStyle = (props) => ({
    track: baseStyleTrack(props),
});
exports.default = {
    parts: anatomy_1.switchAnatomy.keys,
    baseStyle,
};
