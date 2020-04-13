import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Link to="/deliveries">Encomendas</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Nome do usuário</strong>
              <Link to="/">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
