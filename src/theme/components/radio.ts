import { radioAnatomy as parts } from "@chakra-ui/anatomy";
import {
  PartsStyleFunction,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import Checkbox from "./checkbox";

const baseStyleControl: SystemStyleFunction = (props) => {
  const { control = {} } = Checkbox.baseStyle(props);

  return {
    ...control,
    _checked: { ...(control as any)["_checked"] },
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: Checkbox.baseStyle(props).label,
  control: baseStyleControl(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
