import { mode } from "@chakra-ui/theme-tools";
const baseStyle = (props) => {
    const hoverBg = mode(`blackA.4`, `whiteA.4`)(props);
    const activeBg = mode(`blackA.5`, `whiteA.5`)(props);
    return {
        _hover: { bg: hoverBg },
        _active: { bg: activeBg },
    };
};
export default {
    baseStyle,
};
