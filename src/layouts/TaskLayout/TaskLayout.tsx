import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';

import {
  StyledBackdrop,
  StyledModal,
  StyledTaskContainer,
} from './TaskLayout.styles';

const TaskLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const modalRef = useRef<HTMLDivElement>(null);
  const { boardId } = useParams<{ boardId: string }>();

  return (
    <StyledModal
      ref={modalRef}
      open
      onClose={() => history.push(`/boards/${boardId}`)}
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
        }, 20);
      }}
    >
      <Fade in>
        <StyledTaskContainer>{children}</StyledTaskContainer>
      </Fade>
    </StyledModal>
  );
};

export default TaskLayout;
