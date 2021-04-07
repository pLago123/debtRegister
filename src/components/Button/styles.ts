import styled from 'styled-components';
import { lighten } from 'polished';

interface ButtonProps {
  color?: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${props => props.color || '#e3e3e3'};

  padding: 10px 20px;

  color: white;
  font-weight: bold;

  border: 0;
  border-radius: 4px;

  transition-property: background-color;
  transition-duration: 0.15s;

  &:hover {
    background-color: ${props => props.color && lighten(0.08, props.color)};
  }

  + button {
    margin-left: 15px;
  }
`;
