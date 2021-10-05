import { mode } from "@chakra-ui/theme-tools";
const baseStyleText = (props) => {
    return {
        color: mode("red.9", "redDark.9")(props),
    };
};
const baseStyleIcon = (props) => {
    return {
        color: mode("red.9", "redDark.9")(props),
    };
};
const baseStyle = (props) => ({
    text: baseStyleText(props),
    icon: baseStyleIcon(props),
});
export default {
    baseStyle,
};
