import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormSwitch from '../FormSwitch';
import { Switch } from './FormControlLabel.stories';

export default {
  component: FormSwitch,
  title: 'FormSwitch',
} as ComponentMeta<typeof FormSwitch>;

const Template: ComponentStory<typeof FormSwitch> = (args) => {
  return <FormSwitch {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: true };

export const Label = Switch;
