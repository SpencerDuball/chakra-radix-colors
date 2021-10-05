"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const react_3 = require("@chakra-ui/react");
const theme_1 = require("../src/theme");
require("@testing-library/jest-dom");
const AllTheProvider = ({ children }) => {
    return (<>
      <react_3.ColorModeScript initialColorMode={theme_1.theme.config.initialColorMode}/>
      <react_3.ChakraProvider theme={theme_1.theme}>{children}</react_3.ChakraProvider>
    </>);
};
const customRender = (ui, options) => (0, react_2.render)(ui, Object.assign({ wrapper: AllTheProvider }, options));
exports.render = customRender;
__exportStar(require("@testing-library/react"), exports);
