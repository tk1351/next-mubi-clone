import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta = {
  title: "Components/Grid",
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: (
      <>
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            style={{
              height: "200px",
              width: "300px",
              border: "1px solid orange",
            }}
          ></div>
        ))}
      </>
    ),
  },
};
