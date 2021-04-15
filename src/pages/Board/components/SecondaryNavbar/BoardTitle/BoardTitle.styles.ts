import styled from 'styled-components';
import AutosizeInput from 'react-input-autosize';

export const StyledAutoSizeInput = styled(AutosizeInput)`
  && {
    margin-right: 4px;
    & input {
      max-width: 100px;
      height: 100%;
      border: none;
      background-color: ${({ theme }) => theme.colors.transparency[300]};
      color: ${({ theme }) => theme.colors.neutral[100]};
      font-size: 18px;
      font-weight: 700;
      padding: 0 12px;
      border-radius: 3px;
      transition: background-color 200ms ease-in-out,
        border-color 200ms ease-in-out;
      &:focus {
        outline: none;
        color: ${({ theme }) => theme.colors.blue[400]};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
    }
  }
`;
