import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Stack } from "./Stack";

describe(`Testing Stack Component`, () => {
  describe("Snapshot", () => {
    it("isRecursive が true の場合", () => {
      const { container } = render(<Stack isRecursive={true}>Stack</Stack>);
      expect(container).toMatchSnapshot();
    });
    it("isRecursive が false の場合", () => {
      const { container } = render(<Stack isRecursive={false}>Stack</Stack>);
      expect(container).toMatchSnapshot();
    });
  });
});
