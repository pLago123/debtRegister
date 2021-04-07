import { forwardRef, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { Container, Label } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  error?: FieldError;
}

const Select: React.ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { name, error, children, ...rest },
  ref,
) => {
  return (
    <Container>
      <Label>
        <select name={name} id="" {...rest} ref={ref}>
          {children}
        </select>
      </Label>
      {error && <span>{error.message}</span>}
    </Container>
  );
};

export default forwardRef(Select);
