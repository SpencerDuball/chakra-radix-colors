"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overrides = exports.theme = exports.getResolvedColorPair = exports.getBaseColorPair = exports.useThemedColor = exports.getThemedColor = void 0;
// import utils
const tools_1 = require("./util/tools");
Object.defineProperty(exports, "getThemedColor", { enumerable: true, get: function () { return tools_1.getThemedColor; } });
Object.defineProperty(exports, "useThemedColor", { enumerable: true, get: function () { return tools_1.useThemedColor; } });
Object.defineProperty(exports, "getBaseColorPair", { enumerable: true, get: function () { return tools_1.getBaseColorPair; } });
Object.defineProperty(exports, "getResolvedColorPair", { enumerable: true, get: function () { return tools_1.getResolvedColorPair; } });
// import theme/overrides
const theme_1 = require("./theme");
Object.defineProperty(exports, "theme", { enumerable: true, get: function () { return theme_1.theme; } });
Object.defineProperty(exports, "overrides", { enumerable: true, get: function () { return theme_1.overrides; } });
