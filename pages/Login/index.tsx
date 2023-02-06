import Link from "next/link";
import InputText from "../../src/components/InputText";
import {
  Main,
  Title,
  Button,
  Description,
  Container,
  AsideContainer,
  Image
} from "../../src/components/sharedstyles";

export const Login = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ... flex justify-center">
      <Container className="w-full h-full max-w-screen-lg grid grid-cols-2">
        <AsideContainer className="flex justify-center items-center mr-20">
          <Image src="/hero-image.png" alt="" />
        </AsideContainer>
        <Main className=" flex flex-col justify-center items-center gap-4">
          <Title>Login</Title>
          <Description>Organize seu dinheiro em tempo real. </Description>
          <form action="" className="flex flex-col w-full ">
            <InputText Label="E-mail" type="email" />
            <InputText Label="Senha" type="password" />
            <Button>Login</Button>
          </form>
          <Link href='/register'>Criar conta</Link>
        </Main>
      </Container>
    </div>
  );
};
