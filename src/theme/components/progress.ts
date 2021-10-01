import { progressAnatomy as parts } from "@chakra-ui/anatomy";
import {
  generateStripe,
  getColor,
  mode,
  PartsStyleFunction,
  PartsStyleObject,
  StyleFunctionProps,
} from "@chakra-ui/theme-tools";
import type {
  SystemStyleObject,
  SystemStyleFunction,
} from "@chakra-ui/theme-tools";
import { getBaseColorPair } from "../../util/tools";

function filledStyle(props: StyleFunctionProps): SystemStyleObject {
  const { colorScheme: c, theme: t, isIndeterminate, hasStripe } = props;
  const [lightC, darkC] = getBaseColorPair(c, t);

  const stripeStyle = mode(
    generateStripe(),
    generateStripe("1rem", "rgba(0,0,0,0.1)")
  )(props);

  const bgColor = mode(`${lightC}.9`, `${darkC}.9`)(props);

  const gradient = `linear-gradient(
    to right,
    transparent 0%,
    ${getColor(t, bgColor)} 50%,
    transparent 100%
  )`;

  const addStripe = !isIndeterminate && hasStripe;

  return {
    ...(addStripe && stripeStyle),
    ...(isIndeterminate ? { bgImage: gradient } : { bgColor }),
  };
}

const baseStyleLabel: SystemStyleObject = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white",
};

const baseStyleTrack: SystemStyleFunction = (props) => {
  return {
    bg: mode("defaultgray.3", "defaultgrayDark.3")(props),
  };
};

const baseStyleFilledTrack: SystemStyleFunction = (props) => {
  return {
    transitionProperty: "common",
    transitionDuration: "slow",
    ...filledStyle(props),
  };
};

const baseStyle: PartsStyleFunction<typeof parts> = (props) => ({
  label: baseStyleLabel,
  filledTrack: baseStyleFilledTrack(props),
  track: baseStyleTrack(props),
});

export default {
  parts: parts.keys,
  baseStyle,
};
