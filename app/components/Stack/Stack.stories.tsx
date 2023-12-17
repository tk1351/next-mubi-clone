import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta = {
  title: "Components/Stack",
  component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: (
      <>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
      </>
    ),
    isRecursive: false,
  },
};

export const Recursive: Story = {
  args: {
    children: (
      <>
        <div style={{ width: "100%", border: "2px solid purple" }}>
          <div
            style={{
              width: "100%",
              height: "30px",
              border: "1px solid orange",
            }}
          ></div>
          <div
            style={{
              width: "100%",
              height: "30px",
              border: "1px solid orange",
            }}
          ></div>
        </div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
        <div
          style={{ width: "100%", height: "30px", border: "2px solid purple" }}
        ></div>
      </>
    ),
    isRecursive: true,
  },
};
