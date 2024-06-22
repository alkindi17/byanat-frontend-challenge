import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

import ResizeObserver from "resize-observer-polyfill";

global.ResizeObserver = ResizeObserver;
Object.assign(global, { TextDecoder, TextEncoder });

// Mock the react-apexcharts component to prevent errors
jest.mock("react-apexcharts", () => ({
  __esModule: true,
  default: () => "<div />",
}));
