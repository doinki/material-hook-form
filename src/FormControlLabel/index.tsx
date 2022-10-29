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
      | 'value'
      | 'onBlur'
      | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {
  children: MuiFormControlLabelProps['control'];
}

const FormControlLabel = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormControlLabelProps<TFieldValues, TName>
) => {
  const {
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
    children,
    ...rest
  } = props;

  const {
    field: { value, ...field },
  } = useController({
    control,
    name,
    defaultValue,
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
