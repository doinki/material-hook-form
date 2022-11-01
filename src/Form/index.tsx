import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import type {
  ElementType,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
} from 'react';
import { forwardRef } from 'react';

export interface FormProps extends BoxProps<'form'> {
  /**
   * @default 'form'
   */
  component?: ElementType;
  /**
   * @default false
   */
  disableEnterSubmit?: boolean;
}

/**
 * @see [React Box component](https://mui.com/material-ui/react-box/)
 */
const Form: FC<FormProps> = forwardRef((props, ref) => {
  const {
    component = 'form',
    onKeyDown,
    onSubmit,
    disableEnterSubmit = false,
    ...rest
  } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (disableEnterSubmit && e.key === 'Enter') {
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
      ref={ref}
      component={component}
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
    />
  );
});

export default Form;
