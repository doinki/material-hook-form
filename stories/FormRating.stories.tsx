import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormRating from '../src/FormRating';

export default {
  component: FormRating,
  title: 'FormRating',
} as ComponentMeta<typeof FormRating>;

const Template: ComponentStory<typeof FormRating> = (args) => {
  return <FormRating {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: 3 };
