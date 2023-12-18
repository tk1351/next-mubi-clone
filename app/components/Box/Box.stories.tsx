import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta = {
  title: "Components/Box",
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: (
      <div
        style={{ height: "100%", width: "100%", border: "1px solid purple" }}
      >
        <h3>Card</h3>
        <p>Description</p>
      </div>
    ),
  },
};

export const Nested: Story = {
  args: {
    children: (
      <>
        <Box>
          <header
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid orange",
            }}
          >
            Header
          </header>
        </Box>
        <Box>
          <div
            style={{
              height: "100%",
              width: "100%",
              border: "1px solid purple",
            }}
          >
            <h3>Card</h3>
            <p>Description</p>
          </div>
        </Box>
      </>
    ),
  },
};
