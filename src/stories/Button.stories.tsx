import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: {action:'clicked'},
    backgroundColor: { control: 'color' },
  },
  parameters: {
    actions: {
      argTypesRegex: '^on.*',
      handles: ['mouseover', 'click.btn']
    }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'skdfjlclisdk',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const PrimaryLongName = Template.bind({});

PrimaryLongName.args = {
  ...Primary.args,
  label: 'Primary with a really long name',
}