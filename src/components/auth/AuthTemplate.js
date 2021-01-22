import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 7rem;
  right: 1rem;
  bottom: 0;
  left: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
