"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const baseStyleButton = {
    _hover: {
        bg: "blackA.2",
    },
};
const baseStyle = {
    button: baseStyleButton,
};
exports.default = {
    parts: anatomy_1.accordionAnatomy.keys,
    baseStyle,
};
