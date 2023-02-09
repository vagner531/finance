import React, { useState } from "react";
import Link from "next/link";
import InputText from "../../components/InputText";
import axios from "axios";
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
} from "../../components/sharedstyles";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/register", {
        name,
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
          <Titleimg>O guia para o seu sucesso financeiro</Titleimg>
          <Descriptionimg>
            Garanta uma previsibilidade financeira poderosa cadastrando suas
            despesas em tempo real, de onde você estiver.
          </Descriptionimg>
        </AsideContainer>
        <Main className=" flex flex-col justify-center items-center gap-4">
          <Title>Crie sua conta como quiser</Title>
          <Description>
            Crie sua conta para começar a controlar sua grana.
          </Description>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-xs gap-2"
          >
            <InputText
              Label="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
            <Button>Começar a usar</Button>
          </form>
          <Link href="/">Já possuo uma conta</Link>
        </Main>
      </Container>
    </div>
  );
};
