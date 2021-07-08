import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import logo from '../logo.png';

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink href="https://discord.gg/MYEdsa8YJ4" target="_blank">Join Discord</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
