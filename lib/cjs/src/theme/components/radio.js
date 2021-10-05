"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const anatomy_1 = require("@chakra-ui/anatomy");
const checkbox_1 = __importDefault(require("./checkbox"));
const baseStyleControl = (props) => {
    const { control = {} } = checkbox_1.default.baseStyle(props);
    return Object.assign(Object.assign({}, control), { _checked: Object.assign({}, control["_checked"]) });
};
const baseStyle = (props) => ({
    label: checkbox_1.default.baseStyle(props).label,
    control: baseStyleControl(props),
});
exports.default = {
    parts: anatomy_1.radioAnatomy.keys,
    baseStyle,
};
