import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";
const baseStyleTrack = (props) => {
    return {
        borderRadius: "sm",
        bg: mode("defaultgray.4", "defaultgrayDark.4")(props),
        _disabled: {
            bg: mode("defaultgray.5", "defaultgrayDark.5")(props),
        },
    };
};
const baseStyleThumb = (props) => {
    return {
        _disabled: { bg: "defaultgray.5" },
    };
};
const baseStyleFilledTrack = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    return {
        bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
    };
};
const baseStyle = (props) => ({
    track: baseStyleTrack(props),
    thumb: baseStyleThumb(props),
    filledTrack: baseStyleFilledTrack(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
