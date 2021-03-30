import React from 'react';
import { useHistory } from 'react-router-dom';
import { Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { Title, Sidebar, MainContent } from './components';
import {
  StyledModal,
  StyledBackdrop,
  StyledTaskContainer,
  StyledCloseIcon,
  StyledBody,
} from './Task.styles';

const TaskModal: React.FC = () => {
  const history = useHistory();
  return (
    <StyledModal
      open
      onClose={() => history.goBack()}
      closeAfterTransition
      BackdropComponent={StyledBackdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in>
        <StyledTaskContainer>
          <StyledCloseIcon>
            <CloseIcon onClick={() => history.goBack()} />
          </StyledCloseIcon>
          <Title />
          <StyledBody>
            <MainContent />
            <Sidebar />
          </StyledBody>
        </StyledTaskContainer>
      </Fade>
    </StyledModal>
  );
};

export default TaskModal;
