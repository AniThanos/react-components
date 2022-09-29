import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default",
  variant: "default",
  size: "lg",
  onClick: () => {},
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  variant: "danger",
  size: "xl",
  borderRadius: "xl",
};

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  variant: "primary",
  size: "sm",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  variant: "secondary",
  size: "md",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  variant: "success",
  fullWidth: true,
  disable: true,
};
