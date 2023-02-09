import {
  Buttondash,
  Buttonlog,
  ContainerF,
  Maindash,
  Radiobox,
  TransactionsTypeContainer,
} from "./styles";
import Modal from "react-modal";
import React, { useState, FormEvent, useContext} from "react";
import { TransactionsTable } from "./Historico";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";

export const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data)
  }

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  // ------------consumindo api-----------------
      const transactions = useContext(TransactionsContext);

      console.log(transactions);
  // -------------------------------------------

  return (
    <div className="w-screen h-screen flex items-center flex-col bg-gradient-to-r from-rose-700 to-pink-600">
      <header className="w-full max-w-screen-lg flex flex-wrap items-center justify-between h-1/6">
        <span className="font-bold text-3xl text-white">Finace</span>
        <nav>
          <Buttondash type="button" onClick={handleOpenNewTransactionModal}>
            Adicionar nova transação
          </Buttondash>
          <Buttonlog>Sair</Buttonlog>

          <Modal
            isOpen={isNewTransactionModalOpen}
            onRequestClose={handleCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
          >
            <button
              type="button"
              onClick={handleCloseNewTransactionModal}
              className="react-modal-close"
            >
              <img src="/fechar.svg" alt="Fechar modal" />
            </button>
            <ContainerF onSubmit={handleCreateNewTransaction}>
              <h2>Cadastrar transação</h2>

              <input
                placeholder="Titulo"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
              <input
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
              />
              <TransactionsTypeContainer>
                <Radiobox
                  type="button"
                  onClick={() => setType("deposit")}
                  isActive={type === "deposit"}
                  activeColor="green"
                >
                  <img src="/saida.svg" alt="entrada" />
                  <span>Entrada</span>
                </Radiobox>
                <Radiobox
                  type="button"
                  onClick={() => setType("withdraw")}
                  isActive={type === "withdraw"}
                  activeColor="red"
                >
                  <img src="/entrada.svg" alt="saida" />
                  <span>Saida</span>
                </Radiobox>
              </TransactionsTypeContainer>
              <input
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}
              />
              <button type="submit">Cadastrar</button>
            </ContainerF>
          </Modal>
        </nav>
      </header>
      <Maindash className="w-full max-w-screen-lg  content-start h-4/1 grid grid-cols-3 gap-4 p-4">
        <div>
          <header>
            <p>Entradas</p>
            <img src="/saida.svg" alt="" />
          </header>
          <strong>R$1000,00</strong>
        </div>
        <div>
          <header>
            <p>Saidas</p>
            <img src="/entrada.svg" alt="" />
          </header>
          <strong>- R$1000,00</strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src="/total.svg" alt="" />
          </header>
          <strong>R$1000,00</strong>
        </div>
      </Maindash>
      <footer className="w-full mt-10 max-w-screen-lg border-red-700 content-start flex flex-col">
        <TransactionsTable />
      </footer>
    </div>
  );
};
