"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.overrides = void 0;
const react_1 = require("@chakra-ui/react");
const colorsModule = __importStar(require("@radix-ui/colors"));
const styles_1 = __importDefault(require("./styles"));
const components_1 = require("./components");
// turn colorsModule into object
const colors = Object.fromEntries(Object.entries(colorsModule).map(([key, value]) => [
    key,
    Object.fromEntries(Object.entries(value).map(([colorKey, colorValue]) => [
        colorKey.match(/[0-9]+$/)[0],
        colorValue,
    ])),
]));
// override the default styles
exports.overrides = {
    colors: Object.assign(Object.assign({}, colors), { defaultgray: Object.assign({}, colors.slate), defaultgrayA: Object.assign({}, colors.slateA), defaultgrayDark: Object.assign({}, colors.slateDark), defaultgrayDarkA: Object.assign({}, colors.slateDarkA) }),
    components: {
        Accordion: components_1.Accordion,
        Alert: components_1.Alert,
        Avatar: components_1.Avatar,
        Badge: components_1.Badge,
        Button: components_1.Button,
        Checkbox: components_1.Checkbox,
        CloseButton: components_1.CloseButton,
        Code: components_1.Code,
        Drawer: components_1.Drawer,
        FormError: components_1.FormError,
        Form: components_1.Form,
        Input: components_1.Input,
        Kbd: components_1.Kbd,
        Menu: components_1.Menu,
        Modal: components_1.Modal,
        NumberInput: components_1.NumberInput,
        Popover: components_1.Popover,
        Progress: components_1.Progress,
        Radio: components_1.Radio,
        Select: components_1.Select,
        Skeleton: components_1.Skeleton,
        SkipLink: components_1.SkipLink,
        Slider: components_1.Slider,
        Switch: components_1.Switch,
        Table: components_1.Table,
        Tabs: components_1.Tabs,
        Tag: components_1.Tag,
        Textarea: components_1.Textarea,
        Tooltip: components_1.Tooltip,
    },
    styles: styles_1.default,
    config: {
        initialColorMode: "light",
    },
};
// create theme
exports.theme = (0, react_1.extendTheme)(exports.overrides);
exports.theme.colors = exports.overrides.colors; // remove the default @chakra-ui colors
