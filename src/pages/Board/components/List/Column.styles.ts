import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Container = styled.div`
  box-sizing: border-box;
  padding-right: 4px;
  margin: 14px 4px 0 0;
  background-color: #ebecf0;
  border-radius: 3px;
  width: 272px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  flex-shrink: 0;
`;

export const ListTitle = styled.div`
  padding: 8px;
  color: #172b4d;
  font-weight: 600;
`;

export const ListTitleInput = styled(TextField)`
  padding: 8px;
  color: #172b4d;
  font-weight: 600;
  border: none;
  width: 100%;
  & > div {
    padding: 8px 0 8px 8px;
    & textarea {
      border-radius: 3px;
      padding: 7px 8px 4px;
      box-sizing: border-box;
      color: #172b4d;
      font-weight: 600;
      min-height: 28px;
      &:focus {
        background-color: #fff;
        box-shadow: inset 0 0 0 2px #0079bf;
      }
    }
  }
  & fieldset {
    border: none;
  }
`;

export const TaskList = styled.div`
  padding: 0 8px;
  flex-grow: 1;
  max-height: 442px;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #d3d3d3;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c0c0c0;
  }
`;

export const StyledListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    margin: 6px 3px 0 0;
    height: 20px;
    width: 20px;
    padding: 6px;
    cursor: pointer;
    border-radius: 3px;
    &:hover {
      background-color: rgba(9, 30, 66, 0.08);
    }
    svg {
      color: #6b778c;
    }
  }
`;
