import { useColorMode } from "@chakra-ui/react";
import type { Dict } from "@chakra-ui/utils";

/**
 * Accepts a mode ("light" | "dark") and returns a function that accepts a color ("red.4").
 * This color is turned into the opposite-mode value when mode is turned to "dark" from "light"
 * and vise-versa.
 *
 * @param mode "light" | "dark"
 * @returns Function that accepts string of a color and returns the themed
 * color.
 * @example
 *   getThemedColor("light")("blue.4") // "blue.4";
 *   getThemedColor("dark")("blueA.5") // "blueDarkA.5"
 */
export const getThemedColor = (mode: string) => (color: string) => {
  const [base, index] = color.split(".");
  const [isDark, isA] = [base.includes("Dark"), base.includes("A")];

  // search for the base, ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = base.match(/[a-z]+/);
  if (!baseSearch) return color;

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";
  newBase =
    mode === "light"
      ? `${newBase}${isDark ? "Dark" : ""}${A}`
      : `${newBase}${isDark ? "" : "Dark"}${A}`;

  if (newBase && index) return `${newBase}.${index}`;
  else return color;
};

/**
 * Hook that returns a function, (color: string) => themedColor.
 * Where the themedColor of the function returned will change with the color mode.
 *
 * @returns Mode adaptive color function.
 * @example
 *   const c = useThemedColor();
 *   c("blue.4") // blue.4 when light; blueDark.4 when dark
 *
 */
export function useThemedColor() {
  const { colorMode } = useColorMode();
  const mode = colorMode === "dark" ? "dark" : "light";

  return getThemedColor(mode);
}

/**
 * Returns a [lightBaseColor, darkBaseColor] tuple with the light and
 * dark colors of the input base color.
 *
 * @param color A base color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the [lightBaseColor, darkBaseColor].
 * @example
 *   const [original, flipped] = getBaseColorPair("red", theme);
 *   // returns ["red", "redDark"]
 */
export const getBaseColorPair = (color: string, theme: Dict<any>) => {
  const [isDark, isA] = [color.includes("Dark"), color.includes("A")];

  // make sure the passed color matches a theme color exactly
  if (!theme.colors[color]) return [color, color];

  // search for the base, ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = color.match(/[a-z]+/)!;

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";

  // get light and dark base
  const lightBase = `${newBase}${isDark ? "Dark" : ""}${A}`;
  const darkBase = `${newBase}${isDark ? "" : "Dark"}${A}`;

  return [`${lightBase}`, `${darkBase}`];
};

/**
 * Returns a [lightColor, darkColor] tuple with the light and
 * dark colors of the input color.
 *
 * @param color A color string from theme. Ex: "teal"
 * @param theme The theme with radix-ui color palettes.
 * @returns A color tuple of the resolved [lightColor, darkColor].
 * @example
 *   const [original, flipped] = getResolvedColorPair("amberA.7", theme);
 *   // returns ["hsl(36 99.9% 46.2% / 0.612)", "hsl(34 99.6% 52.9% / 0.331)"]
 */
export const getResolvedColorPair = (color: string, theme: Dict<any>) => {
  const [base, index] = color.split(".");
  const [isDark, isA] = [base.includes("Dark"), base.includes("A")];

  // search for the base, ex: "blue" from color "blueDarkA"
  // we can search for contiguous lowercase to find this
  const baseSearch = base.match(/[a-z]+/);
  if (!baseSearch) return [color, color];

  // create new base
  let newBase = baseSearch[0];
  const A = isA ? "A" : "";

  // get light and dark base
  const lightBase = `${newBase}${isDark ? "Dark" : ""}${A}`;
  const darkBase = `${newBase}${isDark ? "" : "Dark"}${A}`;

  if (theme.colors[newBase] && theme.colors[newBase][index])
    return [theme.colors[lightBase][index], theme.colors[darkBase][index]];
  else return [color, color];
};
