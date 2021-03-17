import styled from 'styled-components';

export const StyledDashboard = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

export const StyledPage = styled.div`
  display: flex;
  height: calc(100vh - 40px);
  overflow-y: auto;
  margin-top: 40px;
  & > div:first-child {
    flex-grow: 0.56;
    & > div:first-child {
      margin-left: auto;
      position: relative;
    }
  }
  & > div:last-child {
    margin: 40px 16px 0;
    width: 100%;
    max-width: 825px;
    min-width: 288px;
    flex-grow: 5.8;
  }
  @media (max-width: 1250px) {
    & > div:first-child {
      flex-grow: 0.56;
    }
    & > div:last-child {
      flex-grow: 8;
    }
  }
  @media (max-width: 1200px) {
    & > div:first-child {
      flex-grow: 0.56;
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
