import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cluster } from "./Cluster";

describe(`Testing Cluster Component`, () => {
  describe("Snapshot", () => {
    it("position が left の場合", () => {
      const { container } = render(<Cluster position="left">Cluster</Cluster>);
      expect(container).toMatchSnapshot();
    });
    it("position が right の場合", () => {
      const { container } = render(<Cluster position="right">Cluster</Cluster>);
      expect(container).toMatchSnapshot();
    });
    it("position が center の場合", () => {
      const { container } = render(
        <Cluster position="center">Cluster</Cluster>,
      );
      expect(container).toMatchSnapshot();
    });
  });
  describe("a11y", () => {
    it('role="list" であること', () => {
      render(<Cluster>Cluster</Cluster>);
      expect(screen.getByRole("list")).toBeInTheDocument();
    });
  });
});
