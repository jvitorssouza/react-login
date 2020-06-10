import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Row, Input } from 'antd';
import { MdPerson } from 'react-icons/md';

import {
  Container,
  LoginContainer,
  InfoContainer,
  DataContainer,
} from './styles';

import Logo from '~/assets/images/logo.png';

const Login: React.FC = () => {
  const FormRules = {
    username: [{ required: true, message: 'Informe seu usuário' }],
    password: [
      { required: true, message: 'Informe sua senha' },
      {
        min: 8,
        message: 'A senha deve conter no mínimo 8 caracteres',
      },
    ],
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onFinish = (): void => {
    return;
  };

  return (
    <Container>
      <LoginContainer>
        <InfoContainer style={loaded ? { transform: 'translateX(0)' } : {}}>
          <img src={Logo} alt="logo" />

          <div>
            <p className="welcome">SEJA BEM-VINDO</p>
            <p className="satisfaction">
              É uma satisfação tê-lo conosco novamente!
            </p>
            <p className="registerNow">
              Se você é um novo usuário, registre-se agora mesmo!
            </p>
          </div>

          <Link to="register">
            <button type="button"> REGISTRE-SE </button>
          </Link>
        </InfoContainer>

        <DataContainer style={loaded ? { transform: 'translateX(0)' } : {}}>
          <p className="title"> IDENTIFIQUE-SE PARA CONTINUAR </p>

          <Form onFinish={onFinish}>
            <Form.Item name="username" rules={FormRules.username}>
              <Row>
                <Input
                  type="username"
                  name="username"
                  placeholder="Usuário"
                  suffix={<MdPerson />}
                />
              </Row>
            </Form.Item>

            <Form.Item name="password" rules={FormRules.password}>
              <Row>
                <Input.Password
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
              </Row>
            </Form.Item>

            <Form.Item>
              <Row>
                <button type="submit"> Entrar </button>
              </Row>
            </Form.Item>
          </Form>
        </DataContainer>
      </LoginContainer>
    </Container>
  );
};

export default Login;
