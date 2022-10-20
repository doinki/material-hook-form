import type { TextFieldProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export type FormTextFieldProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<
  TextFieldProps,
  'defaultValue' | 'error' | 'name' | 'value' | 'onBlur' | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

const FormTextField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormTextFieldProps<TFieldValues, TName>
) => {
  const { control, name, defaultValue, shouldUnregister, rules, ...rest } =
    props;

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    defaultValue,
    shouldUnregister,
    rules,
  });

  return <TextField {...rest} {...field} error={!!error} />;
};

export default FormTextField;
