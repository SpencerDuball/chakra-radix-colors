import { mode } from "@chakra-ui/theme-tools";
const baseStyle = (props) => {
    return {
        bg: mode("defaultgray.3", "defaultgrayDark.3")(props),
    };
};
export default {
    baseStyle,
};
