import type { SwitchProps } from '@mui/material/Switch';
import Switch from '@mui/material/Switch';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormSwitchProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      SwitchProps,
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
 * @see [React Switch component](https://mui.com/material-ui/react-switch/)
 */
const FormSwitch = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSwitchProps<TFieldValues, TName>
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

  return <Switch {...rest} {...field} checked={value} />;
};

export default FormSwitch;
