import { mode } from "@chakra-ui/theme-tools";
const baseStyleOverlay = {
    bg: "blackA.10",
    zIndex: "overlay",
};
const baseStyleDialog = (props) => {
    const { isFullHeight } = props;
    return Object.assign(Object.assign({}, (isFullHeight && { height: "100vh" })), { zIndex: "modal", maxH: "100vh", bg: mode("white", "defaultgrayDark.2")(props), color: "inherit", boxShadow: mode("lg", "dark-lg")(props) });
};
const baseStyle = (props) => ({
    overlay: baseStyleOverlay,
    dialog: baseStyleDialog(props),
});
export default {
    baseStyle,
};
