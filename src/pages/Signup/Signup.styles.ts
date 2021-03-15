import styled from 'styled-components';
import { ButtonStyle } from '../../layouts';

export const StyledConfirmationText = styled.div`
  margin: 10px 0 20px;
  font-size: ${({ theme }) => theme.typeScale.helperText};
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: 16px;
  text-align: left;
`;

export const SignupButton = styled(ButtonStyle)`
  && {
    background-color: ${({ theme }) => theme.colors.blue[400]};
    :hover {
      background-color: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`;
