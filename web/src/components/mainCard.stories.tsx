import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { Meta, StoryObj } from "@storybook/react";

import MainCard from "./mainCard";

const meta = {
  title: "MainCard",
  component: MainCard,
} satisfies Meta<typeof MainCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const card = await canvas.getByTestId("main-card");
    expect(card.innerHTML).toBe("Hello World");
  },
};
