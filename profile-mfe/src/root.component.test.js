import { render, screen } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("renders without crashing", () => {
    render(<Root />);
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });
});
