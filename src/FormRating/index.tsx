import type { RatingProps } from '@mui/material/Rating';
import Rating from '@mui/material/Rating';
import type {
  FieldPath,
  FieldValues,
  UseControllerProps,
} from 'react-hook-form';
import { useController } from 'react-hook-form';

export type FormRatingProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = Omit<
  RatingProps,
  'defaultValue' | 'name' | 'ref' | 'value' | 'onBlur' | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

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
    field: { onChange: handleChange, ...field },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  });

  return (
    <Rating
      {...rest}
      {...field}
      onChange={(_, newValue) => {
        handleChange(newValue);
      }}
    />
  );
};

export default FormRating;
