import styled from 'styled-components';

export const StyledSidebar = styled.div`
  .sidebar {
    height: 100%;
    & > div {
      position: relative;
      max-width: 240px;
    }
    .sidebar-item-icon {
      min-width: 0;
    }
    .team-button {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & button {
        border-radius: 0;
      }
    }
  }
`;
