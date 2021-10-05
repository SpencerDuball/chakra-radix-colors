export declare const overrides: {
    colors: {
        defaultgray: {
            [x: string]: string;
        };
        defaultgrayA: {
            [x: string]: string;
        };
        defaultgrayDark: {
            [x: string]: string;
        };
        defaultgrayDarkA: {
            [x: string]: string;
        };
    };
    components: {
        Accordion: {
            parts: ("button" | "container" | "item" | "panel" | "icon")[];
            baseStyle: Partial<Record<"button" | "container" | "item" | "panel" | "icon", import("@chakra-ui/react").CSSObject>>;
        };
        Alert: {
            variants: {
                subtle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"title" | "container" | "icon" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                "left-accent": import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"title" | "container" | "icon" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                "top-accent": import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"title" | "container" | "icon" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                solid: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"title" | "container" | "icon" | "description">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
        };
        Avatar: {
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "container" | "badge" | "excessLabel" | "group">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Badge: {
            variants: {
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                subtle: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
            };
        };
        Button: {
            variants: {
                ghost: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                link: import("@chakra-ui/theme-tools").SystemStyleFunction;
            };
        };
        Checkbox: {
            parts: ("label" | "container" | "icon" | "control")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "container" | "icon" | "control">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            sizes: Record<string, Partial<Record<"label" | "container" | "icon" | "control", import("@chakra-ui/react").CSSObject>>>;
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        CloseButton: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        Code: {
            variants: {
                solid: import("@chakra-ui/theme-tools").SystemStyleFunction;
                subtle: import("@chakra-ui/theme-tools").SystemStyleFunction;
                outline: import("@chakra-ui/theme-tools").SystemStyleFunction;
            };
        };
        Drawer: {
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"body" | "dialog" | "footer" | "header" | "overlay" | "dialogContainer" | "closeButton">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        FormError: {
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"text" | "icon">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Form: {
            parts: ("container" | "requiredIndicator" | "helperText")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"container" | "requiredIndicator" | "helperText">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Input: {
            parts: ("element" | "addon" | "field")[];
            variants: {
                outline: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                filled: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                flushed: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
        };
        Kbd: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        Menu: {
            parts: ("button" | "item" | "list" | "groupTitle" | "command" | "divider")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"button" | "item" | "list" | "groupTitle" | "command" | "divider">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Modal: {
            parts: ("body" | "dialog" | "footer" | "header" | "overlay" | "dialogContainer" | "closeButton")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"body" | "dialog" | "footer" | "header" | "overlay" | "dialogContainer" | "closeButton">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        NumberInput: {
            parts: ("field" | "root" | "stepperGroup" | "stepper")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"field" | "root" | "stepperGroup" | "stepper">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Popover: {
            parts: ("body" | "footer" | "header" | "content" | "popper" | "arrow")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"body" | "footer" | "header" | "content" | "popper" | "arrow">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Progress: {
            parts: ("label" | "track" | "filledTrack")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "track" | "filledTrack">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Radio: {
            parts: ("label" | "container" | "control")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "container" | "control">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Select: {
            parts: ("icon" | "field")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"icon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            variants: {
                outline: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                filled: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                flushed: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"element" | "addon" | "field">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
        };
        Skeleton: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        SkipLink: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
        Slider: {
            parts: ("track" | "container" | "filledTrack" | "thumb")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"track" | "container" | "filledTrack" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Switch: {
            parts: ("track" | "container" | "thumb")[];
            baseStyle: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"track" | "container" | "thumb">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
        };
        Table: {
            parts: ("caption" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr")[];
            variants: {
                simple: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"caption" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
                striped: import("@chakra-ui/theme-tools").PartsStyleFunction<Pick<import("@chakra-ui/theme-tools").Anatomy<"caption" | "table" | "tbody" | "td" | "tfoot" | "th" | "thead" | "tr">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>;
            };
        };
        Tabs: {
            parts: ("tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator")[];
            variants: Record<string, import("@chakra-ui/theme-tools").PartsStyleInterpolation<Pick<import("@chakra-ui/theme-tools").Anatomy<"tab" | "tabpanel" | "tabpanels" | "root" | "tablist" | "indicator">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>>;
        };
        Tag: {
            parts: ("label" | "container" | "closeButton")[];
            variants: Record<string, import("@chakra-ui/theme-tools").PartsStyleInterpolation<Pick<import("@chakra-ui/theme-tools").Anatomy<"label" | "container" | "closeButton">, "extend" | "selectors" | "classNames" | "keys" | "toPart" | "__type">>>;
        };
        Textarea: {
            variants: Record<string, import("@chakra-ui/theme-tools").SystemStyleInterpolation>;
        };
        Tooltip: {
            baseStyle: import("@chakra-ui/theme-tools").SystemStyleFunction;
        };
    };
    styles: import("@chakra-ui/theme-tools").Styles;
    config: {
        initialColorMode: string;
    };
};
export declare const theme: import("@chakra-ui/utils").Dict<any>;
