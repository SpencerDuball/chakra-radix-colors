import { mode } from "@chakra-ui/theme-tools";
const styles = {
    global: (props) => ({
        body: {
            color: mode("defaultgray.12", "white")(props),
            bg: mode("white", "defaultgray.12")(props),
        },
        "*::placeholder": {
            color: mode("defaultgray.9", "defaultgrayDark.9")(props),
        },
        "*, *::before, &::after": {
            borderColor: mode("defaultgray.6", "defaultgrayDark.6")(props),
        },
    }),
};
export default styles;
