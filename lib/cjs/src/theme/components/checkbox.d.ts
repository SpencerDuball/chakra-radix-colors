import type { PartsStyleFunction } from "@chakra-ui/theme-tools";
declare const _default: {
    parts: ("label" | "container" | "icon" | "control")[];
    baseStyle: PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "container" | "icon" | "control">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
    sizes: Record<string, Partial<Record<"label" | "container" | "icon" | "control", import("@chakra-ui/styled-system").CSSObject>>>;
    defaultProps: {
        size: string;
        colorScheme: string;
    };
};
export default _default;
