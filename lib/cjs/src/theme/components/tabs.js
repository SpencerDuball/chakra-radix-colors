"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
const variantLine = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        tab: {
            _selected: {
                color: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
            },
            _active: {
                bg: (0, theme_tools_1.mode)("defaultgray.6", "defaultgrayDark.6")(props),
            },
        },
    };
};
const variantEnclosed = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        tab: {
            _selected: {
                color: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
                borderBottomColor: (0, theme_tools_1.mode)(`white`, `defaultgray.12`)(props),
            },
        },
    };
};
const variantEnclosedColored = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        tab: {
            bg: "none",
            _selected: {
                bg: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
                color: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
            },
        },
    };
};
const variantSoftRounded = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        tab: {
            color: "defaultgray.10",
            _selected: {
                color: (0, theme_tools_1.mode)(`${lightC}.11`, `${darkC}.11`)(props),
                bg: (0, theme_tools_1.mode)(`${lightC}.4`, `${darkC}.4`)(props),
            },
        },
    };
};
const variantSolidRounded = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, theme);
    return {
        tab: {
            color: (0, theme_tools_1.mode)("defaultgray.10", "inherit")(props),
            _selected: {
                color: (0, theme_tools_1.mode)(`white`, "defaultgray.12")(props),
                bg: (0, theme_tools_1.mode)(`${lightC}.10`, `${darkC}.10`)(props),
            },
        },
    };
};
const variants = {
    line: variantLine,
    enclosed: variantEnclosed,
    "enclosed-colored": variantEnclosedColored,
    "soft-rounded": variantSoftRounded,
    "solid-rounded": variantSolidRounded,
};
exports.default = {
    parts: anatomy_1.tabsAnatomy.keys,
    variants,
};
