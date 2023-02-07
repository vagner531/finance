import Link from "next/link";
import InputText from "../../components/InputText";
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
  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center">
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
          <form action="" className="flex flex-col w-full max-w-xs gap-2">
            <InputText Label="Nome" type="password" />
            <InputText Label="E-mail" type="email" />
            <InputText Label="Senha" type="password" />
            <Button>Começar a usar</Button>
          </form>
          <Link href="/">Já possuo uma conta</Link>
        </Main>
      </Container>
    </div>
  );
};