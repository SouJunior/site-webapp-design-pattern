import type { Meta, StoryObj } from "@storybook/react";
import { CtaButton } from "./cta-button";

const meta: Meta<typeof CtaButton> = {
  title: "Components/CtaButton",
  component: CtaButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof CtaButton>;

export const Default: Story = {
  args: {
    label: "Faça Parte",
  },
};

export const WithEmoji: Story = {
  args: {
    label: "🚀 Clique Aqui",
  },
};
