import { FormProvider, useForm } from 'react-hook-form';

export const args = { name: 'storybook' };

export const decorators = [
  (Story) => {
    const methods = useForm();
    const { watch } = methods;

    console.log(watch());

    return (
      <FormProvider {...methods}>
        <Story />
      </FormProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
