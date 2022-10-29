import type { SwitchProps } from '@mui/material/Switch';
import Switch from '@mui/material/Switch';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export type FormSwitchProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<
  SwitchProps,
  | 'checked'
  | 'defaultChecked'
  | 'defaultValue'
  | 'name'
  | 'value'
  | 'onBlur'
  | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

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
