import { switchAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";
const baseStyleTrack = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    return {
        bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
        _checked: {
            bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
        },
    };
};
const baseStyle = (props) => ({
    track: baseStyleTrack(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
