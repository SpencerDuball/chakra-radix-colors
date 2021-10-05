import { menuAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
const baseStyleList = (props) => {
    return {
        bg: mode("white", "defaultgrayDark.2")(props),
        boxShadow: mode("sm", "dark-lg")(props),
    };
};
const baseStyleItem = (props) => {
    return {
        _focus: {
            bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
        },
        _active: {
            bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
        },
        _expanded: {
            bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
        },
    };
};
const baseStyle = (props) => ({
    list: baseStyleList(props),
    item: baseStyleItem(props),
    baseButtonStyle,
});
const baseButtonStyle = {
    colorScheme: "defaultgray",
};
export default {
    parts: parts.keys,
    baseStyle,
};
