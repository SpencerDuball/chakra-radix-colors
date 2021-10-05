import { tagAnatomy as parts } from "@chakra-ui/anatomy";
import Badge from "./badge";
const variants = {
    subtle: (props) => ({
        container: Badge.variants.subtle(props),
    }),
    solid: (props) => ({
        container: Badge.variants.solid(props),
    }),
    outline: (props) => ({
        container: Badge.variants.outline(props),
    }),
};
export default {
    parts: parts.keys,
    variants,
};
