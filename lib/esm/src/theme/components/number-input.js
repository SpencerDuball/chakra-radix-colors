import { numberInputAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
const baseStyleStepper = (props) => {
    return {
        borderStartColor: "inherit",
        color: mode("defaultgray.12", "white")(props),
        _active: {
            bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
        },
    };
};
const baseStyle = (props) => ({
    stepper: baseStyleStepper(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
