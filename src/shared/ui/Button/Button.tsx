import { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../config/theme/theme';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  customVariant?: 'primary' | 'secondary'; 
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  customVariant = 'primary',
}) => {
  return (
    <StyledButton customVariant={customVariant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

// Исправим использование props в styled-components
const StyledButton = styled('button')<{ customVariant: 'primary' | 'secondary' }>`
  background-color: ${({ customVariant }) =>
    customVariant === 'primary' ? theme.palette.primary.black : theme.palette.primary.lightGray};
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ customVariant }) =>
    customVariant === 'primary' ? theme.palette.primary.white : theme.palette.primary.black};
  font-size: 14px;
  border: none;
  cursor: pointer;
  font-weight: ${theme.fontWeight.normal};

  &:hover {
    background-color: ${({ customVariant }) =>
      customVariant === 'primary' ? theme.palette.primary.black : theme.palette.primary.lightGray};
    opacity: 0.7;
  }
`;
