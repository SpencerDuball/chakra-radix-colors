import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
const baseStyleOverlay = {
    bg: "blackA.10",
};
const baseStyleDialog = (props) => {
    return {
        bg: mode("white", "defaultgrayDark.2")(props),
    };
};
const baseStyle = (props) => ({
    overlay: baseStyleOverlay,
    dialog: baseStyleDialog(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
