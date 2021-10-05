import { formAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
const baseStyleRequiredIndicator = (props) => {
    return {
        color: mode("red.9", "redDark.9")(props),
    };
};
const baseStyleHelperText = (props) => {
    return {
        color: mode("defaultgray.9", "defaultgrayDark.9")(props),
    };
};
const baseStyle = (props) => ({
    requiredIndicator: baseStyleRequiredIndicator(props),
    helperText: baseStyleHelperText(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
