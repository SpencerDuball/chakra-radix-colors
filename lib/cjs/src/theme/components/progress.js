"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const tools_1 = require("../../util/tools");
function filledStyle(props) {
    const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
    const [lightC, darkC] = (0, tools_1.getBaseColorPair)(c, t);
    const stripeStyle = (0, theme_tools_1.mode)((0, theme_tools_1.generateStripe)(), (0, theme_tools_1.generateStripe)("1rem", "rgba(0,0,0,0.1)"))(props);
    const bgColor = (0, theme_tools_1.mode)(`${lightC}.9`, `${darkC}.9`)(props);
    const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${(0, theme_tools_1.getColor)(t, bgColor)} 50%,
    transparent 100%
  )`;
    const addStripe = !isIndeterminate && hasStripe;
    return Object.assign(Object.assign({}, (addStripe && stripeStyle)), (isIndeterminate ? { bgImage: gradient } : { bgColor }));
}
const baseStyleLabel = {
    lineHeight: "1",
    fontSize: "0.25em",
    fontWeight: "bold",
    color: "white",
};
const baseStyleTrack = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("defaultgray.3", "defaultgrayDark.3")(props),
    };
};
const baseStyleFilledTrack = (props) => {
    return Object.assign({ transitionProperty: "common", transitionDuration: "slow" }, filledStyle(props));
};
const baseStyle = (props) => ({
    label: baseStyleLabel,
    filledTrack: baseStyleFilledTrack(props),
    track: baseStyleTrack(props),
});
exports.default = {
    parts: anatomy_1.progressAnatomy.keys,
    baseStyle,
};
