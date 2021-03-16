import styled from 'styled-components';

export const StyledPage = styled.div`
  margin-top: 40px;
  display: flex;
  height: 87.8vh;
  & > div:first-child {
    flex-grow: 1;
    & > div:first-child {
      margin-left: auto;
    }
  }
  & > div:last-child {
    flex-grow: 5.8;
    margin: 0 16px;
  }
  @media (max-width: 1250px) {
    & > div:first-child {
      flex-grow: 1;
    }
    & > div:last-child {
      flex-grow: 8;
    }
  }
  @media (max-width: 1200px) {
    & > div:first-child {
      flex-grow: 1;
    }
    & > div:last-child {
      flex-grow: 10;
    }
  }
  @media (max-width: 1150px) {
    & > div:first-child {
      flex-grow: unset;
    }
    & > div:last-child {
      flex-grow: 1;
    }
  }
`;
