import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material/FormControlLabel';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormControlLabelProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      MuiFormControlLabelProps,
      | 'checked'
      | 'control'
      | 'defaultChecked'
      | 'defaultValue'
      | 'name'
      | 'ref'
      | 'value'
      | 'onBlur'
      | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {
  children: MuiFormControlLabelProps['control'];
}

/**
 * @see [FormControlLabel API](https://mui.com/material-ui/api/form-control-label/)
 */
const FormControlLabel = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControlLabelProps<TFieldValues, TName>
) => {
  const {
    children,
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
    ...rest
  } = props;

  const {
    field: { value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <MuiFormControlLabel
      {...rest}
      {...field}
      checked={value}
      control={children}
      value={value}
    />
  );
};

export default FormControlLabel;
