import type { SelectProps } from '@mui/material/Select';
import Select from '@mui/material/Select';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormSelectProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      SelectProps,
      'defaultValue' | 'name' | 'ref' | 'value' | 'onBlur' | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {}

/**
 * @see [React Select component](https://mui.com/material-ui/react-select/)
 */
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
