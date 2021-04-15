import styled from 'styled-components';

export const StyledCloseIcon = styled.span`
  color: ${({ theme }) => theme.colors.blue[300]};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  padding: 4px;
  margin: 4px;
  width: 32px;
  transition: background-color 85ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkness[50]};
    cursor: pointer;
  }
  & svg {
    margin: 6px;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  margin-top: 16px;
`;
