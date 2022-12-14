import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormCheckbox from '../src/FormCheckbox';

export default {
  component: FormCheckbox,
  title: 'FormCheckbox',
} as ComponentMeta<typeof FormCheckbox>;

const Template: ComponentStory<typeof FormCheckbox> = (args) => {
  return <FormCheckbox {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: true };

export { Checkbox as Label } from './FormControlLabel.stories';
