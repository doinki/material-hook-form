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

const isEnabledSubmitButton = (target: EventTarget) => {
  return (
    target instanceof HTMLButtonElement &&
    target.type === 'submit' &&
    !target.disabled
  );
};

/**
 * @see [React Box component](https://mui.com/material-ui/react-box/)
 */
const Form: FC<FormProps> = forwardRef((props, ref) => {
  const {
    component = 'form',
    disableEnterSubmit = false,
    onKeyDown,
    onSubmit,
    ...rest
  } = props;

  const handleKeyDown: KeyboardEventHandler<HTMLFormElement> = (e) => {
    if (e.key === 'Enter' && !isEnabledSubmitButton(e.target)) {
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
      onKeyDown={disableEnterSubmit ? handleKeyDown : onKeyDown}
      onSubmit={handleSubmit}
    />
  );
});

export default Form;
