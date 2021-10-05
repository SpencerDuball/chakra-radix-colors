import { accordionAnatomy as parts } from "@chakra-ui/anatomy";
const baseStyleButton = {
    _hover: {
        bg: "blackA.2",
    },
};
const baseStyle = {
    button: baseStyleButton,
};
export default {
    parts: parts.keys,
    baseStyle,
};
