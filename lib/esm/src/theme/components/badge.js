import { mode } from "@chakra-ui/theme-tools";
import { getBaseColorPair, getResolvedColorPair } from "../../util/tools";
const variantSolid = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    return {
        bg: mode(`${lightC}.9`, `${darkC}.9`)(props),
        color: mode(`white`, `defaultgrayDark.12`)(props),
    };
};
const variantSubtle = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightC, darkC] = getBaseColorPair(c, theme);
    return {
        bg: mode(`${lightC}.5`, `${darkC}.5`)(props),
        color: mode(`${lightC}.12`, `${darkC}.12`)(props),
    };
};
const variantOutline = (props) => {
    const { colorScheme: c, theme } = props;
    const [lightResolvedC, darkResolvedC] = getResolvedColorPair(`${c}.9`, theme);
    const color = mode(lightResolvedC, darkResolvedC)(props);
    return {
        color,
        boxShadow: `inset 0 0 0px 1px ${color}`,
    };
};
const variants = {
    solid: variantSolid,
    subtle: variantSubtle,
    outline: variantOutline,
};
export default {
    variants,
};
