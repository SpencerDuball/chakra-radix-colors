import { inputAnatomy as parts } from "@chakra-ui/anatomy";
import { getColor, mode } from "@chakra-ui/theme-tools";
function getDefaults(props) {
    const { focusBorderColor: fc, errorBorderColor: ec } = props;
    return {
        focusBorderColor: fc || mode("blue.9", "blue.9")(props),
        errorBorderColor: ec || mode("red.9", "red.9")(props),
    };
}
const variantOutline = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            _hover: {
                borderColor: mode("defaultgray.5", "defaultgrayDark.5")(props),
            },
            _invalid: {
                borderColor: getColor(theme, ec),
                boxShadow: `0 0 0 1px ${getColor(theme, ec)}`,
            },
            _focus: {
                borderColor: getColor(theme, fc),
                boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
            },
        },
        addon: {
            borderColor: "inherit",
            bg: mode("defaultgray.3", "defaultgrayDark.3")(props),
        },
    };
};
const variantFilled = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            bg: mode("defaultgray.3", "defaultgrayDark.3")(props),
            _hover: {
                bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
            },
            _invalid: {
                borderColor: getColor(theme, ec),
            },
            _focus: {
                borderColor: getColor(theme, fc),
            },
        },
        addon: {
            bg: mode("defaultgray.3", "defaultgrayDark.3")(props),
        },
    };
};
const variantFlushed = (props) => {
    const { theme } = props;
    const { focusBorderColor: fc, errorBorderColor: ec } = getDefaults(props);
    return {
        field: {
            _invalid: {
                borderColor: getColor(theme, ec),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, ec)}`,
            },
            _focus: {
                borderColor: getColor(theme, fc),
                boxShadow: `0px 1px 0px 0px ${getColor(theme, fc)}`,
            },
        },
    };
};
const variants = {
    outline: variantOutline,
    filled: variantFilled,
    flushed: variantFlushed,
};
export default {
    parts: parts.keys,
    variants,
};
