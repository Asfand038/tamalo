import styled from 'styled-components';

export const Wrapper = styled.div<{ bgColor: string }>`
  overflow: hidden;
  height: 100vh;
  background-color: ${({ bgColor }) => bgColor};
  & > div:last-child {
    margin-top: 44px;
  }
`;
