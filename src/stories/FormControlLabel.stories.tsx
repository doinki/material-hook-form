import MuiCheckbox from '@mui/material/Checkbox';
import MuiSwitch from '@mui/material/Switch';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormControlLabel from '../FormControlLabel';

export default {
  component: FormControlLabel,
  title: 'FormControlLabel',
} as ComponentMeta<typeof FormControlLabel>;

const Template: ComponentStory<typeof FormControlLabel> = (args) => {
  return <FormControlLabel {...args} />;
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  children: <MuiCheckbox />,
  defaultValue: true,
  label: 'Label',
};

export const Switch = Template.bind({});
Switch.args = {
  children: <MuiSwitch />,
  defaultValue: true,
  label: 'Label',
};
