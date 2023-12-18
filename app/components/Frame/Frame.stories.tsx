import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { Frame } from "./Frame";

const meta = {
  title: "Components/Frame",
  component: Frame,
} satisfies Meta<typeof Frame>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: (
      <Image
        src="https://picsum.photos/200/300"
        alt=""
        width={300}
        height={300}
      />
    ),
  },
};
