import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Helmet } from 'react-helmet';
import { Divider } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';

import { Loader } from '../../components';
import { getAvatarFallbackName, getAppIcon } from '../../utils';
import { useAuth } from '../../contexts';
import { BoardLayout } from '../../layouts';
import { getBoards } from '../Dashboard/api';

import {
  StyledHeader,
  StyledUsername,
  StyledToggleBtnContainer,
  StyledToggleBtn,
  StyledBody,
  StyledForm,
  StyledInputLabel,
  StyledInputField,
  StyledPublicLabel,
  StyledSubmitButton,
  StyledAvatar,
} from './Accounts.styles';

const AccountsPage: React.FC = () => {
  const { user } = useAuth();
  const { profileImg, username } = user;
  const avatarFallbackName = getAvatarFallbackName(username);

  const [name, setName] = useState(username);
  const [bio, setBio] = useState('');

  const { isLoading, isError } = useQuery(['boards'], () => getBoards(user.id));

  if (isLoading) return <Loader color="#e1e1e1" />;
  if (isError) return <div>Something went wrong...</div>;

  return (
    <>
      <Helmet>
        <title>Settings | Tamalo</title>
        <link rel="icon" href={getAppIcon()} />
      </Helmet>
      <BoardLayout bgColor="#fff" navbarColor="#0079bf">
        <StyledHeader>
          <div>
            <StyledAvatar src={profileImg}>{avatarFallbackName}</StyledAvatar>
            <StyledUsername>
              <div>{username}</div>
              <div>@{username}</div>
            </StyledUsername>
          </div>
        </StyledHeader>
        <StyledToggleBtnContainer>
          <div>
            <StyledToggleBtn variant="contained">
              Profile and visibility
            </StyledToggleBtn>
          </div>
        </StyledToggleBtnContainer>
        <StyledBody>
          <div>About</div>
          <Divider />
          <StyledForm>
            <StyledInputLabel>
              <div>Username</div>
              <StyledPublicLabel>
                <PublicIcon />
                <div>Always public</div>
              </StyledPublicLabel>
            </StyledInputLabel>
            <StyledInputField
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              fullWidth
              required
            />
            <StyledInputLabel>
              <div>Bio</div>
              <StyledPublicLabel>
                <PublicIcon />
                <div>Always public</div>
              </StyledPublicLabel>
            </StyledInputLabel>
            <StyledInputField
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              rowsMax={3}
            />
            <StyledSubmitButton type="submit" variant="contained" fullWidth>
              Save
            </StyledSubmitButton>
          </StyledForm>
        </StyledBody>
      </BoardLayout>
    </>
  );
};

export default AccountsPage;
