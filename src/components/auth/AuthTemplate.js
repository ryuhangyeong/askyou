import React from 'react';
import styled from 'styled-components';

const AuthTemplateBlock = styled.div`
  position: absolute;
  top: 6rem;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthTemplate = ({ children }) => {
  return <AuthTemplateBlock>{children}</AuthTemplateBlock>;
};

export default AuthTemplate;
