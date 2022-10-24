import MenuItem from '@mui/material/MenuItem';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormSelect from '../FormSelect';

export default {
  component: FormSelect,
  title: 'FormSelect',
} as ComponentMeta<typeof FormSelect>;

const Template: ComponentStory<typeof FormSelect> = (args) => {
  return <FormSelect {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: [
    <MenuItem key={10} value={10}>
      Ten
    </MenuItem>,
    <MenuItem key={20} value={20}>
      Twenty
    </MenuItem>,
    <MenuItem key={30} value={30}>
      Thirty
    </MenuItem>,
  ],
  defaultValue: 20,
};
