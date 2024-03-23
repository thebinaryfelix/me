import { renderHook } from "@testing-library/react";
import { useBrowser } from "./useBrowser";

describe("useBrowser", () => {
  let mockUserAgent: string;

  beforeAll(() => {
    mockUserAgent = "";
    Object.defineProperty(global.navigator, "userAgent", {
      get: () => mockUserAgent,
    });
  });

  test("detects Firefox correctly", () => {
    mockUserAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0";

    const { result } = renderHook(() => useBrowser());

    expect(result.current.isFirefox).toBe(true);
  });

  test("detects non-Firefox browsers correctly", () => {
    mockUserAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36";

    const { result } = renderHook(() => useBrowser());

    expect(result.current.isFirefox).toBe(false);
  });
});
