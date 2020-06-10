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

const Register: React.FC = () => {
  const FormRules = {
    name: [{ required: true, message: 'Informe seu nome' }],
    username: [{ required: true, message: 'Informe seu usuário' }],
    password: [
      { required: true, message: 'Informe sua senha' },
      {
        min: 8,
        message: 'A senha deve conter no mínimo 8 caracteres',
      },
    ],
    repassword: [
      { required: true, message: 'Confirme sua senha' },
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
        <DataContainer style={loaded ? { transform: 'translateX(0)' } : {}}>
          <Form onFinish={onFinish}>
            <Form.Item name="name" rules={FormRules.name}>
              <Row>
                <Input
                  type="name"
                  name="name"
                  placeholder="Nome do Usuário"
                  suffix={<MdPerson />}
                />
              </Row>
            </Form.Item>

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

            <Form.Item
              name="repassword"
              rules={[
                ...FormRules.repassword,
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('As 2 senhas não se coincidem');
                  },
                }),
              ]}
              dependencies={['password']}
            >
              <Row>
                <Input.Password
                  type="repassword"
                  name="repassword"
                  placeholder="Confirme sua senha"
                />
              </Row>
            </Form.Item>

            <Form.Item>
              <Row>
                <button type="submit"> Cadastrar </button>
              </Row>
            </Form.Item>
          </Form>
        </DataContainer>

        <InfoContainer style={loaded ? { transform: 'translateX(0)' } : {}}>
          <img src={Logo} alt="logo" />

          <div>
            <p className="welcome">SEJA BEM-VINDO</p>
            <p className="satisfaction">É uma satisfação tê-lo conosco!</p>
            <p className="registerNow">
              Se você já é um usuário, entre com suas credenciais!
            </p>
          </div>

          <Link to="login">
            <button type="button"> ENTRAR COM MINHA CONTA </button>
          </Link>
        </InfoContainer>
      </LoginContainer>
    </Container>
  );
};

export default Register;
