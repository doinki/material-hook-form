import type { ToggleButtonGroupProps } from '@mui/material/ToggleButtonGroup';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormToggleButtonGroupProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      ToggleButtonGroupProps,
      'defaultValue' | 'ref' | 'value' | 'onBlur' | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {
  /**
   * @default false
   */
  disableNull?: boolean;
}

/**
 * @see [Toggle Button React component](https://mui.com/material-ui/react-toggle-button/)
 */
const FormToggleButtonGroup = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
>(
  props: FormToggleButtonGroupProps<TFieldValues, TName>
) => {
  const {
    control,
    defaultValue,
    disableNull,
    name,
    rules,
    shouldUnregister,
    ...rest
  } = props;

  const {
    field: { onChange, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <ToggleButtonGroup
      {...rest}
      {...field}
      onChange={(_, newValue) => {
        if (
          disableNull &&
          (Array.isArray(newValue) ? newValue.length === 0 : newValue === null)
        ) {
          return;
        }

        onChange(newValue);
      }}
    />
  );
};

export default FormToggleButtonGroup;
