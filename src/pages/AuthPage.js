import React from 'react';

import Header from '@/components/common/layout/Header';
import AuthTemplate from '@/components/auth/AuthTemplate';
import AuthForm from '@/components/auth/AuthForm';

const AuthPage = () => {
  return (
    <>
      <Header />
      <AuthTemplate>
        <AuthForm />
      </AuthTemplate>
    </>
  );
};

export default AuthPage;
