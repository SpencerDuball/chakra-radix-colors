"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const baseStyle = (props) => {
    const hoverBg = (0, theme_tools_1.mode)(`blackA.4`, `whiteA.4`)(props);
    const activeBg = (0, theme_tools_1.mode)(`blackA.5`, `whiteA.5`)(props);
    return {
        _hover: { bg: hoverBg },
        _active: { bg: activeBg },
    };
};
exports.default = {
    baseStyle,
};
