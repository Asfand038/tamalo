import React from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
  color: #e1e1e1;
  text-indent: -9999em;
  position: absolute;
  left: 50%;
  top: 40%;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  &,
  &:before,
  &:after {
    background: #e1e1e1;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
  }
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
  }
  &:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
`;

const Loader: React.FC = () => <StyledLoader />;

export default Loader;
