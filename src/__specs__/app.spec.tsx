import { App } from "@/App";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("shows the store name as the main heading", () => {
    render(<App />);

    expect(screen.getByRole("heading", { level: 1, name: "Loja Ágil Web" })).toBeInTheDocument();
  });
});
