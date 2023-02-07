import { useRouter } from 'next/router';
import Card from "./Card";
import { Buttondash, Buttonlog, Maindash } from "./styles";


export const Dashboard = () => {
  const router = useRouter();
  const array = [
    { id: '0', title: 'Netflix',  price: 39.90},
    { id: '1', title: 'Amazon',  price: 39.90},
    { id: '2', title: 'Disney',  price: 39.90},
    { id: '3', title: 'HBO',  price: 39.90},
  
  ];

  const handleNavigateToAdNewExpense = () => {
    router.push("/dashboard/add");
  };

  return (
    <div className="w-screen h-screen flex items-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
      <header className="w-full max-w-screen-lg flex flex-wrap items-center justify-between h-1/6">
          <span className="font-bold text-3xl text-white">Finace</span>
        <nav >
          <Buttondash onClick={handleNavigateToAdNewExpense}>Adicionar nova Conta</Buttondash>
          <Buttonlog>Sair</Buttonlog>
          </nav>
      </header>
      <Maindash className="w-full max-w-screen-lg overflow-y-scroll content-start h-4/6 grid grid-cols-4 gap-4 p-4">
      {array.map((item) => (
        <Card key={item.id} title={item.title} price={item.price}/>
      ))}        
        </Maindash>
    </div>
  );
};
