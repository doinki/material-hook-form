import type { SliderProps } from '@mui/material/Slider';
import Slider from '@mui/material/Slider';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormSliderProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      SliderProps,
      'defaultValue' | 'name' | 'ref' | 'value' | 'onBlur' | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {}

/**
 * @see [React Slider component](https://mui.com/material-ui/react-slider/)
 */
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
