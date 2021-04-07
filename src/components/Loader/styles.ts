import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`;

const maskPath = keyframes`
  0% {
    stroke-dasharray: 1 300;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 180 300;
    stroke-dashoffset: -135;
  }
  100% {
    stroke-dasharray: 180 300;
    stroke-dashoffset: -248;
  }
`;

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

export const SVG = styled.svg<ContainerProps>`
  width: 100%;
  height: 100%;
  animation: ${rotate} 1.5s linear infinite;
`;

interface CircleProps {
  color?: string;
}

export const Circle = styled.circle<CircleProps>`
  stroke: ${props => `${props.color ?? '#e7b057'}`};
  animation: ${maskPath} 1.5s ease-in-out infinite;
`;
