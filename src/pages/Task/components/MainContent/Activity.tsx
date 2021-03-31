import React, { useState } from 'react';

import {
  ListRounded as ListRoundedIcon,
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';
import styled from 'styled-components';
import {
  TextField,
  Button,
  IconButton,
  ClickAwayListener,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';

import {
  StyledWrapper,
  StyledTitleContainer,
  StyledTitle,
  StyledIcon,
  StyledAvatar,
  StyledButton,
} from './MainContent.styles';

const StyledAccordion = styled(Accordion)`
  &&& {
    flex: 1;
    border: none;
    transition: none;
    background-color: white;
    border-radius: 3px;
    margin: 0;
    margin-left: 14px;
    box-shadow: ${({ expanded }) =>
      expanded
        ? '0 4px 8px -2px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)'
        : '0 1px 2px -1px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%)'};
    &::before {
      content: none;
    }
    & > div:first-child {
      min-height: 0;
    }
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  &&& {
    min-height: 0;
    transition: none;
    padding: 0;
    background-color: white;
    & > div:first-child {
      margin: 2px 0;
    }
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  && {
    padding: 0;
    justify-content: space-between;
    margin: 12px 12px 8px;
  }
`;

const StyledTextField = styled(TextField)`
  && {
    width: -webkit-fill-available;
    & > div {
      padding: 8px 12px;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      color: #172b4d;

      &::placeholder {
        color: #172b4d !important;
        opacity: 0.8 !important;
      }
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    height: 28px;
    width: 28px;
    border-radius: 3px;
    margin-left: 4px;
    &:hover {
      background-color: rgba(9, 30, 66, 0.13);
    }
    & svg {
      color: #42526e;
    }
    & .sm-icon {
      height: 14px;
      width: 14px;
    }
    & .md-icon {
      height: 18px;
      width: 18px;
    }
  }
`;

export const StyledSaveButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    transition: background-color 85ms ease;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    height: 34px;
    width: 60px;
    min-width: 0px;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

const StyledIconBtnContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -4px -5px 0;
`;

const Activity: React.FC = () => {
  const [isWritingComment, setIsWritingComment] = useState(false);

  const iconBtnList = [
    { icon: <AttachmentIcon className="md-icon" /> },
    { icon: <AlternateEmailIcon className="sm-icon" /> },
    { icon: <SentimentSatisfiedRoundedIcon className="sm-icon" /> },
    { icon: <VideoLabelIcon className="sm-icon" /> },
  ];

  return (
    <StyledWrapper>
      <StyledTitleContainer>
        <StyledIcon component={<ListRoundedIcon />} />
        <StyledTitle>Activity</StyledTitle>
        <StyledButton>Show details</StyledButton>
      </StyledTitleContainer>
      <div className="d-flex">
        <StyledAvatar>AJ</StyledAvatar>
        <ClickAwayListener onClickAway={() => setIsWritingComment(false)}>
          <StyledAccordion expanded={isWritingComment}>
            <StyledAccordionSummary>
              <StyledTextField
                onFocus={() => setIsWritingComment(true)}
                multiline
                variant="outlined"
                placeholder="Write a comment..."
              />
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledSaveButton>Save</StyledSaveButton>
              <StyledIconBtnContainer>
                {iconBtnList.map(({ icon }, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <StyledIconButton key={index}>{icon}</StyledIconButton>
                ))}
              </StyledIconBtnContainer>
            </StyledAccordionDetails>
          </StyledAccordion>
        </ClickAwayListener>
      </div>
    </StyledWrapper>
  );
};

export default Activity;
