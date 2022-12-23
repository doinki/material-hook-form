import type { RatingProps } from '@mui/material/Rating';
import Rating from '@mui/material/Rating';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export interface FormRatingProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> extends Omit<
      RatingProps,
      'defaultValue' | 'name' | 'ref' | 'value' | 'onBlur' | 'onChange'
    >,
    UseControllerProps<TFieldValues, TName> {}

/**
 * @see [React Rating component](https://mui.com/material-ui/react-rating/)
 */
const FormRating = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormRatingProps<TFieldValues, TName>
) => {
  const { control, defaultValue, name, rules, shouldUnregister, ...rest } =
    props;

  const {
    field: { onChange, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  const handleChange: RatingProps['onChange'] = (_, newValue) => {
    onChange(newValue);
  };

  return <Rating {...rest} {...field} onChange={handleChange} />;
};

export default FormRating;
