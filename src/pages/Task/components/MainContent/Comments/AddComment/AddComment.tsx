import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { ClickAwayListener } from '@material-ui/core';
import {
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
} from '../Comments.styles';

export const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const iconBtnList = [
  { icon: <AttachmentIcon className="md-icon" /> },
  { icon: <AlternateEmailIcon className="sm-icon" /> },
  { icon: <SentimentSatisfiedRoundedIcon className="sm-icon" /> },
  { icon: <VideoLabelIcon className="sm-icon" /> },
];

const AddComment: React.FC = () => {
  const [isWritingComment, setIsWritingComment] = useState(false);

  return (
    <StyledWrapper>
      <StyledAvatar>AJ</StyledAvatar>
      <ClickAwayListener onClickAway={() => setIsWritingComment(false)}>
        <StyledAccordion expanded={isWritingComment}>
          <StyledAccordionSummary isWriting={isWritingComment}>
            <StyledTextField
              onFocus={() => setIsWritingComment(true)}
              multiline
              variant="outlined"
              placeholder="Write a comment..."
              isWriting={isWritingComment}
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
    </StyledWrapper>
  );
};

export default AddComment;
