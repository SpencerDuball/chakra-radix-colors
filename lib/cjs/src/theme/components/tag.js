"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const badge_1 = __importDefault(require("./badge"));
const variants = {
    subtle: (props) => ({
        container: badge_1.default.variants.subtle(props),
    }),
    solid: (props) => ({
        container: badge_1.default.variants.solid(props),
    }),
    outline: (props) => ({
        container: badge_1.default.variants.outline(props),
    }),
};
exports.default = {
    parts: anatomy_1.tagAnatomy.keys,
    variants,
};
