import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormToggleButtonGroup from '../FormToggleButtonGroup';

export default {
  component: FormToggleButtonGroup,
  title: 'FormToggleButtonGroup',
} as ComponentMeta<typeof FormToggleButtonGroup>;

const Template: ComponentStory<typeof FormToggleButtonGroup> = (args) => {
  return <FormToggleButtonGroup {...args} />;
};

export const ExclusiveSelection = Template.bind({});
ExclusiveSelection.args = {
  children: [
    <ToggleButton key="left" value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="center" value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="right" value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key="justify" value="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ],
  defaultValue: '',
  exclusive: true,
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  children: [
    <ToggleButton key="left" value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="center" value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="right" value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key="justify" value="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ],
  defaultValue: [],
};

export const EnforceValue1 = Template.bind({});
EnforceValue1.args = {
  children: [
    <ToggleButton key="left" value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="center" value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="right" value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key="justify" value="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ],
  defaultValue: 'left',
  enforce: true,
  exclusive: true,
};

export const EnforceValue2 = Template.bind({});
EnforceValue2.args = {
  children: [
    <ToggleButton key="left" value="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton key="center" value="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton key="right" value="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton key="justify" value="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ],
  defaultValue: ['left'],
  enforce: true,
};
