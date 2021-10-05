import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";
const variantSimple = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    let color = mode("defaultgray.11", "defaultgrayDark.11")(props);
    if (c.includes("Dark")) {
        color = mode("defaultgrayDark.11", "defaultgray.11")(props);
    }
    return {
        th: {
            color,
            borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
        },
        td: {
            borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
        },
        caption: {
            color: mode("defaultgrayDark.10", "defaultgray.10")(props),
        },
    };
};
const variantStripe = (props) => {
    const { theme, colorScheme: c } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    let thColor = mode("defaultgray.11", "defaultgrayDark.11")(props);
    let captionColor = mode("defaultgrayDark.10", "defaultgray.10")(props);
    let tdColor = mode("defaultgray.12", "white")(props);
    if (c.includes("Dark")) {
        thColor = mode("defaultgrayDark.11", "defaultgray.11")(props);
        captionColor = mode("defaultgray.10", "defaultgrayDark.10")(props);
        tdColor = mode("white", "defaultgray.12")(props);
    }
    return {
        th: {
            color: thColor,
            borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
        },
        td: {
            borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
            color: tdColor,
        },
        caption: {
            color: captionColor,
        },
        tbody: {
            tr: {
                "&:nth-of-type(odd)": {
                    "th, td": {
                        borderColor: mode(`${lightC}.6`, `${darkC}.6`)(props),
                    },
                    td: {
                        background: mode(`${lightC}.6`, `${darkC}.6`)(props),
                    },
                },
            },
        },
    };
};
const variants = {
    simple: variantSimple,
    striped: variantStripe,
};
export default {
    parts: parts.keys,
    variants,
};
