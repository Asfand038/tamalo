import React from 'react';

import { AddComment } from './AddComment';
import { Comment } from './Comment';
import { IComment } from '../../../utils';

interface IProps {
  comments: IComment[];
}

const Comments: React.FC<IProps> = ({ comments }) => {
  return (
    <>
      <AddComment />
      {comments.map((comment) => (
        <Comment key={comment.commentId} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
