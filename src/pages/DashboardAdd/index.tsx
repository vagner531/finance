import Link from "next/link";
import InputText from "../../components/InputText";
import {
  Main,
  Title,
  Button,
  Description,
  Container,
} from "../../components/sharedstyles";

export const DashboardAdd = () => {
  return (
    <div className=" w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... flex justify-center">
      <Container className="w-4/6 h-full max-w-screen-xl flex justify-center items-center">
        <Main className=" flex flex-col justify-center items-center gap-10">
          <Title className="w-80">Cadastre uma nova Despesa</Title>
          <form action="" className="flex flex-col w-full max-w-xs gap-2">
            <InputText Label="Descrição" type="text" />
            <InputText Label="Valor" type="number" />
            <Button>Cadastrar</Button>
          </form>
          <Link href="/dashboard">Cancelar</Link>
        </Main>
      </Container>
    </div>
  );
};
