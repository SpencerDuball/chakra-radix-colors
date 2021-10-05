"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const theme_tools_1 = require("@chakra-ui/theme-tools");
const Input_1 = __importDefault(require("./Input"));
const baseStyleField = (props) => {
    return {
        bg: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
        "> option, > optgroup": {
            bg: (0, theme_tools_1.mode)("white", "defaultgray.12")(props),
        },
    };
};
const baseStyle = (props) => ({
    field: baseStyleField(props),
});
exports.default = {
    parts: anatomy_1.selectAnatomy.keys,
    baseStyle,
    variants: Input_1.default.variants,
};
