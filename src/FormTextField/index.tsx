import type { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormTextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      TextFieldProps,
      | 'defaultValue'
      | 'error'
      | 'name'
      | 'ref'
      | 'value'
      | 'onBlur'
      | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {}

/**
 * @see [React Text Field component](https://mui.com/material-ui/react-text-field/)
 */
const FormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormTextFieldProps<TFieldValues, TName>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } =
    props;

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <TextField
      error={!!error}
      helperText={error?.message}
      {...rest}
      {...field}
    />
  );
};

export default FormTextField;
