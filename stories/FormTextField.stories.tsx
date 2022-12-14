import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormTextField from '../src/FormTextField';

export default {
  component: FormTextField,
  title: 'FormTextField',
} as ComponentMeta<typeof FormTextField>;

const Template: ComponentStory<typeof FormTextField> = (args) => {
  return <FormTextField {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: '' };

export const HelperText = Template.bind({});
HelperText.args = {
  defaultValue: '',
  helperText: 'Weight',
};
