"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tools_1 = require("./tools");
const react_1 = __importDefault(require("react"));
const react_2 = require("@chakra-ui/react");
const react_testing_library_1 = require("react-testing-library");
require("@testing-library/jest-dom");
const theme_1 = require("../theme");
describe("getThemedColor ", () => {
    test("works with light colors", () => {
        ["gray", "red", "amber"].forEach((color) => {
            expect((0, tools_1.getThemedColor)("light")(`${color}.3`)).toBe(`${color}.3`);
            expect((0, tools_1.getThemedColor)("dark")(`${color}.8`)).toBe(`${color}Dark.8`);
        });
    });
    test("works with dark colors", () => {
        ["gray", "teal", "sky"].forEach((color) => {
            expect((0, tools_1.getThemedColor)("light")(`${color}Dark.5`)).toBe(`${color}Dark.5`);
            expect((0, tools_1.getThemedColor)("dark")(`${color}Dark.5`)).toBe(`${color}.5`);
        });
    });
    test("works with alpha colors", () => {
        ["gray", "pink", "purple"].forEach((color) => {
            // light-colored alpha
            expect((0, tools_1.getThemedColor)("light")(`${color}A.5`)).toBe(`${color}A.5`);
            expect((0, tools_1.getThemedColor)("dark")(`${color}A.5`)).toBe(`${color}DarkA.5`);
            // dark-colored alpha
            expect((0, tools_1.getThemedColor)("light")(`${color}DarkA.7`)).toBe(`${color}DarkA.7`);
            expect((0, tools_1.getThemedColor)("dark")(`${color}DarkA.2`)).toBe(`${color}A.2`);
        });
    });
    test("returns raw garbage values", () => {
        ["", "gray", "gr", "lime."].forEach((color) => {
            expect((0, tools_1.getThemedColor)("light")(color)).toBe(color);
            expect((0, tools_1.getThemedColor)("dark")(color)).toBe(color);
        });
    });
});
describe("useThemedColor ", () => {
    test("works when changing color modes", () => {
        const MyReactElement = () => {
            const { toggleColorMode, colorMode } = (0, react_2.useColorMode)();
            const c = (0, tools_1.useThemedColor)();
            return (<>
          <react_2.Button onClick={toggleColorMode}>Toggle Color Mode</react_2.Button>
          <react_2.Text as="h1">{c("tealA.4")}</react_2.Text>
        </>);
        };
        // render the scene
        const { asFragment } = (0, react_testing_library_1.render)(<MyReactElement />);
        // check that the light mode color is rendered
        expect(react_testing_library_1.screen.getByRole("heading")).toHaveTextContent("tealA.4");
        // toggle the color mode
        react_testing_library_1.screen.getByRole("button").click();
        // check that the dark mode color is rendered
        expect(react_testing_library_1.screen.getByRole("heading")).toHaveTextContent("tealDarkA.4");
    });
});
describe("getColorPair ", () => {
    test("works when supplying light colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getBaseColorPair)(color, theme_1.theme)).toEqual([
                `${color}`,
                `${color}Dark`,
            ]);
        });
    });
    test("works when supplying dark colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getBaseColorPair)(`${color}Dark`, theme_1.theme)).toEqual([
                `${color}Dark`,
                `${color}`,
            ]);
        });
    });
    test("works when supplying alpha colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getBaseColorPair)(`${color}A`, theme_1.theme)).toEqual([
                `${color}A`,
                `${color}DarkA`,
            ]);
            expect((0, tools_1.getBaseColorPair)(`${color}DarkA`, theme_1.theme)).toEqual([
                `${color}DarkA`,
                `${color}A`,
            ]);
        });
    });
    test("works with garbage values", () => {
        ["", "gr", "lime.", "pink.14"].forEach((color) => {
            expect((0, tools_1.getBaseColorPair)(color, theme_1.theme)).toEqual([color, color]);
        });
    });
});
describe("getResolvedColorPair ", () => {
    test("works when supplying light colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getResolvedColorPair)(`${color}.2`, theme_1.theme)).toEqual([
                theme_1.theme.colors[color][2],
                theme_1.theme.colors[`${color}Dark`][2],
            ]);
        });
    });
    test("works when supplying dark colors", () => {
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getResolvedColorPair)(`${color}Dark.5`, theme_1.theme)).toEqual([
                theme_1.theme.colors[`${color}Dark`][5],
                theme_1.theme.colors[color][5],
            ]);
        });
    });
    test("works when supplying alpha colors", () => {
        ["gray", "red", "teal", "sky"].forEach((color) => {
            expect((0, tools_1.getResolvedColorPair)(`${color}A.12`, theme_1.theme)).toEqual([
                theme_1.theme.colors[`${color}A`][12],
                theme_1.theme.colors[`${color}DarkA`][12],
            ]);
        });
        ["gray", "pink", "amber", "sky"].forEach((color) => {
            expect((0, tools_1.getResolvedColorPair)(`${color}DarkA.11`, theme_1.theme)).toEqual([
                theme_1.theme.colors[`${color}DarkA`][11],
                theme_1.theme.colors[`${color}A`][11],
            ]);
        });
    });
    test("works with garbage values", () => {
        ["", "gray", "gr", "lime.", "pink.14"].forEach((color) => {
            expect((0, tools_1.getResolvedColorPair)(color, theme_1.theme)).toEqual([color, color]);
        });
    });
});
