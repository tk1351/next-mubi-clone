import type { Meta, StoryObj } from "@storybook/react";
import { Cluster } from "./Cluster";

const meta = {
  title: "Components/Cluster",
  component: Cluster,
} satisfies Meta<typeof Cluster>;

export default meta;
type Story = StoryObj<typeof meta>;
export const FlexStart: Story = {
  args: {
    children: (
      <>
        <li>Fugiat veniam sunt ea incididunt.</li>
        <li>Qui in dolore incididunt sunt adipisicing ullamco.</li>
        <li>Elit duis cupidatat amet eiusmod ullamco.</li>
      </>
    ),
  },
};

export const FlexEnd: Story = {
  args: {
    children: (
      <>
        <li>Fugiat veniam sunt ea incididunt.</li>
        <li>Qui in dolore incididunt sunt adipisicing ullamco.</li>
        <li>Elit duis cupidatat amet eiusmod ullamco.</li>
      </>
    ),
    position: "right",
  },
};

export const Center: Story = {
  args: {
    children: (
      <>
        <li>Fugiat veniam sunt ea incididunt.</li>
        <li>Qui in dolore incididunt sunt adipisicing ullamco.</li>
        <li>Elit duis cupidatat amet eiusmod ullamco.</li>
      </>
    ),
    position: "center",
  },
};
