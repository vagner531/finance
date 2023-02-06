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

export const Login = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ... flex justify-center">
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
          <form action="" className="flex flex-col w-full max-w-xs ">
            <InputText Label="E-mail" type="email" />
            <InputText Label="Senha" type="password" />
            <Button>Login</Button>
          </form>
          <Link href="/register">Criar uma conta</Link>
        </Main>
      </Container>
    </div>
  );
};
