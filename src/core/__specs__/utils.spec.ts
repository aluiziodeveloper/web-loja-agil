import { formatBrlFromCents } from "@core/utils";
import { describe, expect, it } from "vitest";

describe("formatBrlFromCents", () => {
  it("formats integer cents as BRL currency", () => {
    expect(formatBrlFromCents(1990)).toBe("R$\u00a019,90");
    expect(formatBrlFromCents(0)).toBe("R$\u00a00,00");
  });
});
