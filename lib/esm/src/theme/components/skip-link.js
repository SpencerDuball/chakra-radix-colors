import { mode } from "@chakra-ui/theme-tools";
const baseStyle = (props) => ({
    _focus: {
        bg: mode("white", "defaultgray.12")(props),
    },
});
export default {
    baseStyle,
};
