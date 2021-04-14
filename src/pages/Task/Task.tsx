import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Fade } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { getTaskById } from './api';
import { TaskTitle, Sidebar, MainContent } from './components';
import { Loader } from '../../components';
import {
  StyledModal,
  StyledBackdrop,
  StyledTaskContainer,
  StyledCloseIcon,
  StyledBody,
} from './Task.styles';

interface IRouteParams {
  taskId: string;
}

const TaskModal: React.FC = () => {
  const { taskId } = useParams<IRouteParams>();
  const history = useHistory();
  const modalRef = useRef<HTMLDivElement>(null);

  const { isLoading, error } = useQuery(['task', taskId], () =>
    getTaskById(taskId)
  );

  if (isLoading)
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
          }, 20);
        }}
      >
        <Fade in>
          <StyledTaskContainer>
            <StyledCloseIcon>
              <CloseIcon onClick={() => history.goBack()} />
            </StyledCloseIcon>
            <Loader />
          </StyledTaskContainer>
        </Fade>
      </StyledModal>
    );

  if (error) return <div>Something went wrong...</div>;

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
        <StyledTaskContainer>
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
