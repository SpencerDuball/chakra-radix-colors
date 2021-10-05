import type { Dict } from "@chakra-ui/utils";
/**
 * Accepts a mode ("light" | "dark") and returns a function that accepts a color ("red.4").
 * This color is turned into the opposite-mode value when mode is turned to "dark" from "light"
 * and vise-versa.
 *
 * @param mode "light" | "dark"
 * @returns Function that accepts string of a color and returns the themed
 * color.
 * Ex: ("light")("blue.4") -> "blue.4";
 * Ex: ("dark")("blueA.5") -> "blueDarkA.5"
 */
export declare const getThemedColor: (mode: string) => (color: string) => string;
/**
 * Hook that returns a function, (color: string) => themedColor.
 * Where the themedColor of the function returned will change with the color mode:
 * Ex: ("light")("purple.8") -> "purple.8"; Ex: ("dark")("purple.8") -> "purpleDark.8"
 *
 * @returns Mode adaptive color function.
 */
export declare function useThemedColor(): (color: string) => string;
/**
 * Returns a [lightBaseColor, darkBaseColor] tuple with the light and
 * dark colors of the input base color.
 * Ex: ("amberDarkA", theme) -> ["amberDarkA", "amberA"]
 *
 * @param color A base color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the [lightBaseColor, darkBaseColor].
 */
export declare const getBaseColorPair: (color: string, theme: Dict<any>) => string[];
/**
 * Returns a [lightColor, darkColor] tuple with the light and
 * dark colors of the input color.
 * Ex: ("amberDarkA.3", theme) -> ["amberDarkA.3", "amberA.3"]
 *
 * @param color A color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the resolved [lightColor, darkColor].
 */
export declare const getResolvedColorPair: (color: string, theme: Dict<any>) => any[];
