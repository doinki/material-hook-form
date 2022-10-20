import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import type { FC, FormEventHandler, KeyboardEventHandler } from 'react';

export interface FormProps extends Omit<BoxProps<'form'>, 'component'> {
  /**
   * @default true
   */
  preventEnterSubmit?: boolean;
}

const Form: FC<FormProps> = (props) => {
  const { onKeyDown, onSubmit, preventEnterSubmit = true, ...rest } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (preventEnterSubmit && e.key === 'Enter') {
      e.preventDefault();
    }

    onKeyDown?.(e);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();

    onSubmit?.(e);
  };

  return (
    <Box
      {...rest}
      component="form"
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
    />
  );
};

export default Form;
