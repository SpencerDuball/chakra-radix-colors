"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const baseStyleControl = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        color: "white",
        _checked: {
            bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            borderColor: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            color: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
            _hover: {
                bg: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
                borderColor: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
            },
            _disabled: {
                borderColor: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
                bg: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
                color: (0, theme_tools_1.mode)("defaultgray.9", "defaultgrayDark.9")(props),
            },
        },
        _indeterminate: {
            bg: (0, theme_tools_1.mode)(`${c}.500`, `${c}.200`)(props),
            borderColor: (0, theme_tools_1.mode)(`${c}.500`, `${c}.200`)(props),
            color: (0, theme_tools_1.mode)("white", "defaultgray.900")(props),
        },
        _disabled: {
            bg: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
            borderColor: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
        },
        _focus: {
            boxShadow: "outline",
        },
        _invalid: {
            borderColor: (0, theme_tools_1.mode)("red.9", "redDark.9")(props),
        },
    };
};
const baseStyleLabel = {
    userSelect: "none",
    _disabled: { opacity: 0.4 },
};
const baseStyleIcon = {
    transitionProperty: "transform",
    transitionDuration: "normal",
};
const baseStyle = (props) => ({
    icon: baseStyleIcon,
    control: baseStyleControl(props),
    label: baseStyleLabel,
});
const sizes = {
    sm: {
        control: { h: 3, w: 3 },
        label: { fontSize: "sm" },
        icon: { fontSize: "0.45rem" },
    },
    md: {
        control: { w: 4, h: 4 },
        label: { fontSize: "md" },
        icon: { fontSize: "0.625rem" },
    },
    lg: {
        control: { w: 5, h: 5 },
        label: { fontSize: "lg" },
        icon: { fontSize: "0.625rem" },
    },
};
const defaultProps = {
    size: "md",
    colorScheme: "blue",
};
exports.default = {
    parts: anatomy_1.checkboxAnatomy.keys,
    baseStyle,
    sizes,
    defaultProps,
};
