import { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { Container, Label } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: FieldError;
  icon?: React.ComponentType<{ size: number }>;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error, ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      <Label isFocused={isFocused}>
        <input
          {...rest}
          name={name}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </Label>
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default forwardRef(Input);
