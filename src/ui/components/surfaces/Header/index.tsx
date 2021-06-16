import { Container, Toolbar } from '@material-ui/core';

import { HeaderAppBar, HeaderLogo } from './styles';

export function Header() {
  return (
    <HeaderAppBar position="sticky">
      <Toolbar component={Container}>
        <HeaderLogo src="/img/logos/logo.svg" alt="e-diaristas" />
      </Toolbar>
    </HeaderAppBar>
  );
}
