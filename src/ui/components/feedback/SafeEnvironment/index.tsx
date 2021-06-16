import { Container } from '@material-ui/core';

import { SafeEnvironmentContainer } from './styles';

export function SafeEnvironment() {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro
        <i className="twf-lock" />
      </Container>
    </SafeEnvironmentContainer>
  );
}
