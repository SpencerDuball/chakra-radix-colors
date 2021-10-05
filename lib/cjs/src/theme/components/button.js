"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const grays = [
    "defaultgray",
    "gray",
    "mauve",
    "slate",
    "sage",
    "olive",
    "sand",
];
const variantGhost = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    if (grays.includes(c))
        return {
            color: (0, theme_tools_1.mode)(`${c}.12`, `white`)(props),
            _hover: {
                bg: (0, theme_tools_1.mode)(`${c}.4`, `${c}Dark.4`)(props),
            },
            _active: {
                bg: (0, theme_tools_1.mode)(`${c}.5`, `${c}Dark.5`)(props),
            },
        };
    return {
        color: (0, theme_tools_1.mode)(`${lightC}.11`, `${darkC}.11`)(props),
        bg: "transparent",
        _hover: {
            bg: (0, theme_tools_1.mode)(`${lightC}.4`, `${darkC}.4`)(props),
        },
        _active: {
            bg: (0, theme_tools_1.mode)(`${lightC}.5`, `${darkC}.5`)(props),
        },
    };
};
const variantOutline = (props) => {
    const { colorScheme: c } = props;
    const borderColor = (0, theme_tools_1.mode)(`${c}.6`, `${c}Dark.6`)(props);
    return Object.assign({ border: "1px solid", borderColor: grays.includes(c) ? borderColor : "currentColor" }, variantGhost(props));
};
const variantSolid = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    if (grays.includes(c)) {
        const bg = (0, theme_tools_1.mode)(`${c}.4`, `${c}Dark.4`)(props);
        return {
            bg,
            color: (0, theme_tools_1.mode)(`${c}.12`, `white`)(props),
            _hover: {
                bg: (0, theme_tools_1.mode)(`${c}.5`, `${c}Dark.5`)(props),
                _disabled: {
                    bg,
                },
            },
            _active: {
                bg: (0, theme_tools_1.mode)(`${c}.6`, `${c}Dark.6`)(props),
            },
        };
    }
    return {
        bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        color: (0, theme_tools_1.mode)("white", `defaultgray.12`)(props),
        _hover: {
            bg: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
            _disabled: {
                bg: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
            },
        },
        _active: { bg: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props) },
    };
};
const variantLink = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        color: (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props),
        _active: {
            color: (0, theme_tools_1.mode)(`${lightC}.11`, `${darkC}.11`)(props),
        },
    };
};
const variants = {
    ghost: variantGhost,
    outline: variantOutline,
    solid: variantSolid,
    link: variantLink,
};
exports.default = {
    variants,
};
