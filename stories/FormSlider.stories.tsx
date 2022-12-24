import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormSlider from '../src/FormSlider';

export default {
  component: FormSlider,
  title: 'FormSlider',
} as ComponentMeta<typeof FormSlider>;

const Template: ComponentStory<typeof FormSlider> = (args) => {
  return <FormSlider {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: 50 };
