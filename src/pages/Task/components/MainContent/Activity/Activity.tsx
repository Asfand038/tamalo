import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ClickAwayListener } from '@material-ui/core';
import {
  ListRounded as ListRoundedIcon,
  Attachment as AttachmentIcon,
  AlternateEmail as AlternateEmailIcon,
  SentimentSatisfiedRounded as SentimentSatisfiedRoundedIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import {
  StyledAccordion,
  StyledAccordionDetails,
  StyledAccordionSummary,
  StyledIconBtnContainer,
  StyledIconButton,
  StyledSaveButton,
  StyledTextField,
  StyledAvatar,
  StyledWrapper,
} from './Activity.styles';

import {
  StyledTitleContainer,
  StyledTitle,
  StyledIcon,
  StyledButton,
} from '../MainContent.styles';

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
                {iconBtnList.map(({ icon }) => (
                  <StyledIconButton key={uuidv4()}>{icon}</StyledIconButton>
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
