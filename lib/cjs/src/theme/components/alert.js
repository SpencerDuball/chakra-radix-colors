"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
function getBg(props) {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return (0, theme_tools_1.mode)(`${lightC}.5`, `${darkC}.5`)(props);
}
const variantSubtle = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        container: {
            bg: getBg(props),
            color: (0, theme_tools_1.mode)(`${lightC}.12`, `${lightC}.1`)(props),
        },
        icon: { color: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props) },
    };
};
const variantLeftAccent = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        container: {
            borderStartColor: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            bg: getBg(props),
            color: (0, theme_tools_1.mode)(`${lightC}.12`, `${lightC}.1`)(props),
        },
        icon: {
            color: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        },
    };
};
const variantTopAccent = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        container: {
            borderTopColor: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            bg: getBg(props),
            color: (0, theme_tools_1.mode)(`${lightC}.12`, `${lightC}.1`)(props),
        },
        icon: {
            color: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        },
    };
};
const variantSolid = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        container: {
            bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            color: (0, theme_tools_1.mode)(`${lightC}.12`, `${lightC}.1`)(props),
        },
    };
};
const variants = {
    subtle: variantSubtle,
    "left-accent": variantLeftAccent,
    "top-accent": variantTopAccent,
    solid: variantSolid,
};
exports.default = {
    variants,
};
