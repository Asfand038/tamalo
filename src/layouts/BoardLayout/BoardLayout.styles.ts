import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  & > div:last-child {
    margin-top: 40px;
  }
`;
