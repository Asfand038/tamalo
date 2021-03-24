import styled from 'styled-components';

interface IContainer {
  isDragging: boolean;
}

export const StyledTaskContainer = styled.div<IContainer>`
  && {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    padding: 6px 8px 2px;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 22px;
    box-shadow: ${({ isDragging, theme }) =>
      isDragging
        ? `0 0 3px ${theme.colors.boxShadow}`
        : `0 1px 0 ${theme.colors.boxShadow}`};
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }
`;

export const StyledEditBtn = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  height: 26px;
  width: 26px;
  border-radius: 3px;
  display: none;
  opacity: 0.8;
  ${StyledTaskContainer}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & svg {
    color: ${({ theme }) => theme.colors.blue[300]};
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[250]};
    opacity: 1;
  }
`;
