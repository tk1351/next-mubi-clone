import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

describe(`Testing Grid Component`, () => {
  it("Snapshot", () => {
    const { container } = render(<Grid>{"Grid"}</Grid>);
    expect(container).toMatchSnapshot();
  });
});
