"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const variantSolid = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        color: (0, theme_tools_1.mode)(`white`, `defaultgrayDark.12`)(props),
    };
};
const variantSubtle = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        bg: (0, theme_tools_1.mode)(`${lightC}.5`, `${darkC}.5`)(props),
        color: (0, theme_tools_1.mode)(`${lightC}.12`, `${darkC}.12`)(props),
    };
};
const variantOutline = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightResolvedC, darkResolvedC] = (0, tools_1.getResolvedColorPair)(`${c}.9`, theme);
    const color = (0, theme_tools_1.mode)(lightResolvedC, darkResolvedC)(props);
    return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
    };
};
const variants = {
    solid: variantSolid,
    subtle: variantSubtle,
    outline: variantOutline,
};
exports.default = {
    variants,
};
