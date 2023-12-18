import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Box } from "./Box";

describe(`Testing Box Component`, () => {
  it("Snapshot", () => {
    const { container } = render(<Box>{"Box"}</Box>);
    expect(container).toMatchSnapshot();
  });
});
