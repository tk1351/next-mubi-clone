import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Cluster } from "./Cluster";

describe(`Testing Cluster Component`, () => {
  describe("Snapshot", () => {
    it("justify, aline が 'flex-start' の場合", () => {
      const { container } = render(
        <Cluster justify="flex-start" aline="flex-start">
          Cluster
        </Cluster>,
      );
      expect(container).toMatchSnapshot();
    });
    it("justify, aline が 'flex-end' の場合", () => {
      const { container } = render(
        <Cluster justify="flex-end" aline="flex-end">
          Cluster
        </Cluster>,
      );
      expect(container).toMatchSnapshot();
    });
    it("justify, aline が center の場合", () => {
      const { container } = render(
        <Cluster justify="center" aline="center">
          Cluster
        </Cluster>,
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
