import type { CheckboxProps } from '@mui/material/Checkbox';
import Checkbox from '@mui/material/Checkbox';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormCheckboxProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      CheckboxProps,
      | 'checked'
      | 'defaultChecked'
      | 'defaultValue'
      | 'name'
      | 'ref'
      | 'value'
      | 'onBlur'
      | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {}

/**
 * @see [React Checkbox component](https://mui.com/material-ui/react-checkbox/)
 */
const FormCheckbox = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormCheckboxProps<TFieldValues, TName>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } =
    props;

  const {
    field: { value, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return <Checkbox {...rest} {...field} checked={value} />;
};

export default FormCheckbox;
