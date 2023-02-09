import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import InputText from '../../components/InputText';
import {
  Main,
  Title,
  Button,
  Description,
  Container,
  AsideContainer,
  Image,
  Titleimg,
  Descriptionimg,
} from '../../components/sharedstyles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', {
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-rose-400 to-orange-300 flex justify-center">
      <Container className="w-full h-full max-w-screen-xl grid grid-cols-2">
        <AsideContainer>
          <Image src="/hero-image.png" alt="" />
          <Titleimg>
            Controle total das finanças na palma da sua mão
          </Titleimg>
          <Descriptionimg>
            Organize seu dinheiro em tempo real em uma solução completa, prática
            e segura, e garanta o controle total das suas finanças.
          </Descriptionimg>
        </AsideContainer>
        <Main className=" flex flex-col justify-center items-center gap-4">
          <Title>Acesse sua conta</Title>
          <Description>Organize seu dinheiro em tempo real. </Description>
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-xs gap-2">
            <InputText
              Label="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              Label="Senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button>Login</Button>
          </form>
          <Link href="/register">Criar uma conta</Link>
        </Main>
      </Container>
    </div>
  );
};
