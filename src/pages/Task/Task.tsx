import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { TaskTitle, Sidebar, MainContent } from './components';
import {
  StyledModal,
  StyledBackdrop,
  StyledTaskContainer,
  StyledCloseIcon,
  StyledBody,
} from './Task.styles';

const TaskModal: React.FC = () => {
  const history = useHistory();
  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <StyledModal
      ref={modalRef}
      open
      onClose={() => history.goBack()}
      BackdropComponent={StyledBackdrop}
      BackdropProps={{
        timeout: 500,
      }}
      onRendered={() => {
        const modal = modalRef.current;
        setTimeout(() => {
          if (modal) {
            modal.scrollTo(0, 0);
          }
        }, 85);
      }}
    >
      <Fade in>
        <StyledTaskContainer id="task-container">
          <StyledCloseIcon>
            <CloseIcon onClick={() => history.goBack()} />
          </StyledCloseIcon>
          <TaskTitle />
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
