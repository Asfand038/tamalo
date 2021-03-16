import styled from 'styled-components';

export const StyledPage = styled.div`
  margin-top: 40px;
  display: flex;
  height: 84vh;
  margin-left: 11%;
  & > div:last-child {
    width: 100%;
    margin: 0 16px;
  }
  @media (max-width: 1250px) {
    margin-left: 9%;
  }
  @media (max-width: 1220px) {
    margin-left: 7%;
  }
  @media (max-width: 1180px) {
    margin-left: 4%;
  }
  @media (max-width: 1140px) {
    margin-left: 0;
  }
`;
