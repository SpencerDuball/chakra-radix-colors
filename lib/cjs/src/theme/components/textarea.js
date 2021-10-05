"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = __importDefault(require("./Input"));
const variants = {
    outline: (props) => { var _a; return (_a = Input_1.default.variants.outline(props).field) !== null && _a !== void 0 ? _a : {}; },
    flushed: (props) => { var _a; return (_a = Input_1.default.variants.flushed(props).field) !== null && _a !== void 0 ? _a : {}; },
    filled: (props) => { var _a; return (_a = Input_1.default.variants.filled(props).field) !== null && _a !== void 0 ? _a : {}; },
};
exports.default = {
    variants,
};
