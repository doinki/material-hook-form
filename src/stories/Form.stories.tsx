import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Form from '../Form';
import FormTextField from '../FormTextField';

export default {
  component: Form,
  title: 'Form',
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  return <Form {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  children: (
    <>
      <FormTextField defaultValue="" name="a" type="text" />
      <FormTextField defaultValue="" name="b" type="text" />
      <Button type="submit" variant="outlined">
        Submit
      </Button>
    </>
  ),
  component: (props) => (
    <Stack {...props} component="form" direction="row" gap={2} />
  ),
  onSubmit: (e) => {
    e.preventDefault();
    console.log('onSubmit');
  },
};