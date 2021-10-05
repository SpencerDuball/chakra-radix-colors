"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const variantSimple = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    let color = (0, theme_tools_1.mode)("defaultgray.11", "defaultgrayDark.11")(props);
    if (c.includes("Dark")) {
        color = (0, theme_tools_1.mode)("defaultgrayDark.11", "defaultgray.11")(props);
    }
    return {
        th: {
            color,
            borderColor: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
        },
        td: {
            borderColor: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
        },
        caption: {
            color: (0, theme_tools_1.mode)("defaultgrayDark.10", "defaultgray.10")(props),
        },
    };
};
const variantStripe = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    let thColor = (0, theme_tools_1.mode)("defaultgray.11", "defaultgrayDark.11")(props);
    let captionColor = (0, theme_tools_1.mode)("defaultgrayDark.10", "defaultgray.10")(props);
    let tdColor = (0, theme_tools_1.mode)("defaultgray.12", "white")(props);
    if (c.includes("Dark")) {
        thColor = (0, theme_tools_1.mode)("defaultgrayDark.11", "defaultgray.11")(props);
        captionColor = (0, theme_tools_1.mode)("defaultgray.10", "defaultgrayDark.10")(props);
        tdColor = (0, theme_tools_1.mode)("white", "defaultgray.12")(props);
    }
    return {
        th: {
            color: thColor,
            borderColor: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
        },
        td: {
            borderColor: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
            color: tdColor,
        },
        caption: {
            color: captionColor,
        },
        tbody: {
            tr: {
                "&:nth-of-type(odd)": {
                    "th, td": {
                        borderColor: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
                    },
                    td: {
                        background: (0, theme_tools_1.mode)(`${lightC}.6`, `${darkC}.6`)(props),
                    },
                },
            },
        },
    };
};
const variants = {
    simple: variantSimple,
    striped: variantStripe,
};
exports.default = {
    parts: anatomy_1.tableAnatomy.keys,
    variants,
};
