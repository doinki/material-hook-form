import type { SelectProps } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export type FormSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<
  SelectProps,
  'defaultValue' | 'name' | 'value' | 'onBlur' | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

const FormSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSelectProps<TFieldValues, TName>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } =
    props;

  const { field } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return <Select {...rest} {...field} />;
};

export default FormSelect;
