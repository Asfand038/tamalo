import React, { useState } from 'react';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import {
  StyledContainer,
  StyledIcon,
  StyledTaskTitle,
  StyledTaskTitleInput,
} from './TaskTitle.styles';

const Title: React.FC = () => {
  const [title, setTitle] = useState('hello');

  return (
    <StyledContainer>
      <StyledIcon>
        <VideoLabelIcon />
      </StyledIcon>
      <StyledTaskTitle>
        <StyledTaskTitleInput
          InputProps={{ spellCheck: false }}
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
