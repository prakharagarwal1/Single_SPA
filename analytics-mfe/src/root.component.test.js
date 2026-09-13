import React from "react";
import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("renders without crashing", () => {
    window.history.pushState({}, "", "/analytics");
    render(<Root />);
    expect(
      screen.getByRole("heading", { name: /analytics dashboard/i }),
    ).toBeTruthy();
  });
});
