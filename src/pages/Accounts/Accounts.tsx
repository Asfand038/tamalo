import React, { useState } from 'react';
import { Divider } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';

import { getAvatarFallbackName } from '../../utils';
import { useAuth } from '../../contexts';
import { BoardLayout } from '../../layouts';

import { Avatar } from '../../components';
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
} from './Accounts.styles';

const AccountsPage: React.FC = () => {
  const { user } = useAuth();
  const { profileImg, username } = user;
  const avatarFallbackName = getAvatarFallbackName(username);

  const [name, setName] = useState(username);
  const [bio, setBio] = useState('');

  return (
    <BoardLayout
      profileImg={profileImg}
      avatarFallbackName={avatarFallbackName}
      bgColor="#fff"
    >
      <StyledHeader>
        <div>
          <Avatar
            profileImg={profileImg}
            avatarFallbackName={avatarFallbackName}
            height="48px"
            width="48px"
          />
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
  );
};

export default AccountsPage;
