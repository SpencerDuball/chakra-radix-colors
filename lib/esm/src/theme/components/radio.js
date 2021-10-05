import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import Checkbox from "./checkbox";
const baseStyleControl = (props) => {
    const { control = {} } = Checkbox.baseStyle(props);
    return Object.assign(Object.assign({}, control), { _checked: Object.assign({}, control["_checked"]) });
};
const baseStyle = (props) => ({
    label: Checkbox.baseStyle(props).label,
    control: baseStyleControl(props),
});
export default {
    parts: parts.keys,
    baseStyle,
};
