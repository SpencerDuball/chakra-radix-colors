import { ReactElement } from "react";
import { RenderOptions } from "@testing-library/react";
import "@testing-library/jest-dom";
declare const customRender: (ui: ReactElement, options?: Omit<RenderOptions<typeof import("@testing-library/dom/types/queries"), HTMLElement>, "wrapper"> | undefined) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;
export * from "@testing-library/react";
export { customRender as render };
