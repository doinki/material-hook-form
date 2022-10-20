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
  'defaultValue' | 'name' | 'value' | 'onBlur' | 'onChange'
> &
  UseControllerProps<TFieldValues, TName>;

const FormRating = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FormRatingProps<TFieldValues, TName>
) => {
  const { name, control, defaultValue, rules, shouldUnregister, ...rest } =
    props;

  const { field } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return <Rating {...rest} {...field} />;
};

export default FormRating;
