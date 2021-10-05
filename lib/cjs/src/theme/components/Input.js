"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
function getDefaults(props) {
    const { focusBorderColor: fc, errorBorderColor: ec } = props;
    return {
        focusBorderColor: fc || (0, theme_tools_1.mode)("blue.9", "blue.9")(props),
        errorBorderColor: ec || (0, theme_tools_1.mode)("red.9", "red.9")(props),
    };
}
const variantOutline = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            _hover: {
                borderColor: (0, theme_tools_1.mode)("defaultgray.5", "defaultgrayDark.5")(props),
            },
            _invalid: {
                borderColor: (0, theme_tools_1.getColor)(theme, ec),
                boxShadow: `0 0 0 1px ${(0, theme_tools_1.getColor)(theme, ec)}`,
            },
            _focus: {
                borderColor: (0, theme_tools_1.getColor)(theme, fc),
                boxShadow: `0 0 0 1px ${(0, theme_tools_1.getColor)(theme, fc)}`,
            },
        },
        addon: {
            borderColor: "inherit",
            bg: (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props),
        },
    };
};
const variantFilled = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            bg: (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props),
            _hover: {
                bg: (0, theme_tools_1.mode)("defaultgray.4", "defaultgrayDark.4")(props),
            },
            _invalid: {
                borderColor: (0, theme_tools_1.getColor)(theme, ec),
            },
            _focus: {
                borderColor: (0, theme_tools_1.getColor)(theme, fc),
            },
        },
        addon: {
            bg: (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props),
        },
    };
};
const variantFlushed = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            _invalid: {
                borderColor: (0, theme_tools_1.getColor)(theme, ec),
                boxShadow: `0px 1px 0px 0px ${(0, theme_tools_1.getColor)(theme, ec)}`,
            },
            _focus: {
                borderColor: (0, theme_tools_1.getColor)(theme, fc),
                boxShadow: `0px 1px 0px 0px ${(0, theme_tools_1.getColor)(theme, fc)}`,
            },
        },
    };
};
const variants = {
    outline: variantOutline,
    filled: variantFilled,
    flushed: variantFlushed,
};
exports.default = {
    parts: anatomy_1.inputAnatomy.keys,
    variants,
};
