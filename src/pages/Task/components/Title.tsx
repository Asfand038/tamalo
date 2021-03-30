import React, { useState } from 'react';
import styled from 'styled-components';

import { TextField, TextFieldProps } from '@material-ui/core';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

const StyledContainer = styled.div`
  display: flex;
  margin: 12px 40px 8px 56px;
  min-height: 32px;
  position: relative;
`;

const StyledIcon = styled.span`
  left: -40px;
  position: absolute;
  top: 4px;
  & svg {
    color: #42526e;
  }
`;

const StyledTaskTitle = styled.div`
  width: 100%;
  & > div:last-child {
    margin: 4px 0 0 -1px;
    color: #5e6c84;
    cursor: context-menu;
    & span {
      text-decoration: underline;
      cursor: pointer;
      &:hover {
        color: #172b4d;
      }
    }
  }
`;

const StyledTaskTitleInput = styled(TextField)<TextFieldProps>`
  && {
    width: 100%;
    margin-left: -10px;
    & div {
      padding: 0;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      box-sizing: border-box;
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      color: ${({ theme }) => theme.colors.blue[400]};
      min-height: 33px;
      padding: 10px 8px 6px;
      border-radius: 3px;
      font-size: 20px;
      font-weight: 600;
      transition-property: background-color, border-color, box-shadow;
      transition-duration: 85ms;
      transition-timing-function: ease;
      &:focus {
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
        background-color: ${({ theme }) => theme.colors.neutral[100]};
      }
    }
  }
`;

const Title: React.FC = () => {
  const [title, setTitle] = useState('hello');

  return (
    <StyledContainer>
      <StyledIcon>
        <VideoLabelIcon />
      </StyledIcon>
      <StyledTaskTitle>
        <StyledTaskTitleInput
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          multiline
        />
        <div>
          in list <span>example</span>
        </div>
      </StyledTaskTitle>
    </StyledContainer>
  );
};

export default Title;
