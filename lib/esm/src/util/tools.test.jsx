import { getBaseColorPair, getThemedColor, useThemedColor, getResolvedColorPair, } from "./tools";
import React from "react";
import { useColorMode, Button, Text } from "@chakra-ui/react";
import { render, screen } from "react-testing-library";
import "@testing-library/jest-dom";
import { theme } from "../theme";
describe("getThemedColor ", () => {
    test("works with light colors", () => {
        ["gray", "red", "amber"].forEach((color) => {
            expect(getThemedColor("light")(`${color}.3`)).toBe(`${color}.3`);
            expect(getThemedColor("dark")(`${color}.8`)).toBe(`${color}Dark.8`);
        });
    });
    test("works with dark colors", () => {
        ["gray", "teal", "sky"].forEach((color) => {
            expect(getThemedColor("light")(`${color}Dark.5`)).toBe(`${color}Dark.5`);
            expect(getThemedColor("dark")(`${color}Dark.5`)).toBe(`${color}.5`);
        });
    });
    test("works with alpha colors", () => {
        ["gray", "pink", "purple"].forEach((color) => {
            // light-colored alpha
            expect(getThemedColor("light")(`${color}A.5`)).toBe(`${color}A.5`);
            expect(getThemedColor("dark")(`${color}A.5`)).toBe(`${color}DarkA.5`);
            // dark-colored alpha
            expect(getThemedColor("light")(`${color}DarkA.7`)).toBe(`${color}DarkA.7`);
            expect(getThemedColor("dark")(`${color}DarkA.2`)).toBe(`${color}A.2`);
        });
    });
    test("returns raw garbage values", () => {
        ["", "gray", "gr", "lime."].forEach((color) => {
            expect(getThemedColor("light")(color)).toBe(color);
            expect(getThemedColor("dark")(color)).toBe(color);
        });
    });
});
describe("useThemedColor ", () => {
    test("works when changing color modes", () => {
        const MyReactElement = () => {
            const { toggleColorMode, colorMode } = useColorMode();
            const c = useThemedColor();
            return (<>
          <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
          <Text as="h1">{c("tealA.4")}</Text>
        </>);
        };
        // render the scene
        const { asFragment } = render(<MyReactElement />);
        // check that the light mode color is rendered
        expect(screen.getByRole("heading")).toHaveTextContent("tealA.4");
        // toggle the color mode
        screen.getByRole("button").click();
        // check that the dark mode color is rendered
        expect(screen.getByRole("heading")).toHaveTextContent("tealDarkA.4");
    });
});
describe("getColorPair ", () => {
    test("works when supplying light colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getBaseColorPair(color, theme)).toEqual([
                `${color}`,
                `${color}Dark`,
            ]);
        });
    });
    test("works when supplying dark colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getBaseColorPair(`${color}Dark`, theme)).toEqual([
                `${color}Dark`,
                `${color}`,
            ]);
        });
    });
    test("works when supplying alpha colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getBaseColorPair(`${color}A`, theme)).toEqual([
                `${color}A`,
                `${color}DarkA`,
            ]);
            expect(getBaseColorPair(`${color}DarkA`, theme)).toEqual([
                `${color}DarkA`,
                `${color}A`,
            ]);
        });
    });
    test("works with garbage values", () => {
        ["", "gr", "lime.", "pink.14"].forEach((color) => {
            expect(getBaseColorPair(color, theme)).toEqual([color, color]);
        });
    });
});
describe("getResolvedColorPair ", () => {
    test("works when supplying light colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getResolvedColorPair(`${color}.2`, theme)).toEqual([
                theme.colors[color][2],
                theme.colors[`${color}Dark`][2],
            ]);
        });
    });
    test("works when supplying dark colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getResolvedColorPair(`${color}Dark.5`, theme)).toEqual([
                theme.colors[`${color}Dark`][5],
                theme.colors[color][5],
            ]);
        });
    });
    test("works when supplying alpha colors", () => {
        ["gray", "red", "teal", "sky"].forEach((color) => {
            expect(getResolvedColorPair(`${color}A.12`, theme)).toEqual([
                theme.colors[`${color}A`][12],
                theme.colors[`${color}DarkA`][12],
            ]);
        });
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect(getResolvedColorPair(`${color}DarkA.11`, theme)).toEqual([
                theme.colors[`${color}DarkA`][11],
                theme.colors[`${color}A`][11],
            ]);
        });
    });
    test("works with garbage values", () => {
        ["", "gray", "gr", "lime.", "pink.14"].forEach((color) => {
            expect(getResolvedColorPair(color, theme)).toEqual([color, color]);
        });
    });
});
