import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  & > div:last-child {
    margin-top: 44px;
  }
`;
