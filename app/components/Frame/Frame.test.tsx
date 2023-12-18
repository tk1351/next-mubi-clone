import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Frame } from "./Frame";

describe(`Testing Frame Component`, () => {
  it("Snapshot", () => {
    const { container } = render(<Frame />);
    expect(container).toMatchSnapshot();
  });
});
