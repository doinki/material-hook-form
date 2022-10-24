import type { SliderProps } from '@mui/material/Slider';
import Slider from '@mui/material/Slider';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export type FormSliderProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<
  SliderProps,
  'defaultValue' | 'name' | 'value' | 'onBlur' | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

const FormSlider = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormSliderProps<TFieldValues, TName>
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

  return <Slider {...rest} {...field} />;
};

export default FormSlider;