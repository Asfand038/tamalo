import React, { useState } from 'react';

import { userData, IUser, resultsNotFoundMsg } from './fakeData';
import { Loader, StyledAvatar } from '../../../../../components';
import { getAvatarFallbackName } from '../../../../../utils';
import {
  StyledWrapper,
  StyledButton,
  StyledInputField,
  StyledSearchResultsList,
  StyledMessage,
  LoaderWrapper,
  StyledUserContainer,
} from './RealTimeSearchField.styles';

const RealTimeSearchField = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<IUser[] | []>([]);
  const [message, setMessage] = useState('');

  const fetchSearchResults = (query: string) => {
    const rand = (Math.floor(Math.random() * 4) + 2) * 1000;
    const promise: Promise<IUser[]> = new Promise((resolve) => {
      setTimeout(() => {
        const filteredData = userData.filter((user) =>
          user.username.toLowerCase().includes(query.toLowerCase())
        );
        resolve(filteredData);
      }, rand);
    });

    promise.then((res) => {
      const notFoundMsg = res.length ? '' : resultsNotFoundMsg;
      setResults(res);
      setMessage(notFoundMsg);
      setLoading(false);
    });
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputFieldValue = e.target.value;
    if (!inputFieldValue) {
      setQuery('');
      setMessage('');
      setResults([]);
      setLoading(false);
    } else {
      setQuery(inputFieldValue);
      setLoading(true);
      setMessage('');
      fetchSearchResults(inputFieldValue);
    }
  };

  return (
    <StyledWrapper>
      <div>
        <StyledInputField
          value={query}
          onChange={onChangeHandler}
          variant="outlined"
          placeholder="Email address or name"
          fullWidth
          required
          autoFocus
        />
        {!!query.length && (
          <StyledSearchResultsList>
            {loading && (
              <LoaderWrapper>
                <Loader color="#d3d3d3" />
              </LoaderWrapper>
            )}
            {!loading && !!results.length && (
              <>
                {results.map(({ id, username, profilePic }: IUser) => (
                  <StyledUserContainer key={id} variant="text" fullWidth>
                    <StyledAvatar src={profilePic} width="32px" height="32px">
                      {getAvatarFallbackName(username)}
                    </StyledAvatar>
                    <div>{username}</div>
                  </StyledUserContainer>
                ))}
              </>
            )}
            {!!message && <StyledMessage>{message}</StyledMessage>}
          </StyledSearchResultsList>
        )}
      </div>
      <StyledButton variant="contained">Send invitation</StyledButton>
    </StyledWrapper>
  );
};

export default RealTimeSearchField;
