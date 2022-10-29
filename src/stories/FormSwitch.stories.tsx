import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FormSwitch from '../FormSwitch';

export default {
  component: FormSwitch,
  title: 'FormSwitch',
} as ComponentMeta<typeof FormSwitch>;

const Template: ComponentStory<typeof FormSwitch> = (args) => {
  return <FormSwitch {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: true };
