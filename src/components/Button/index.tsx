import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ color, children, ...rest }) => {
  return (
    <Container color={color} type="button" {...rest}>
      {children}
    </Container>
  );
};

export default Button;
