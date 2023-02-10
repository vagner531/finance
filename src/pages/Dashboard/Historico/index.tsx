import React, { useContext } from "react";
import { TransactionsContext } from "../../../TransactionsContext";
import { ContainerF } from "./styles";


export function TransactionsTable() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <ContainerF className="table-responsive">
      <table className="table-fixed">
        <thead >
          <tr>
            <th className="w-1/2 px-2 py-2">Titulo</th>
            <th className="w-1/2 px-2 py-2">Valor</th>
            <th className="w-1/2 px-2 py-2">Categoria</th>
            <th className="w-1/2 px-2 py-2">Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-2 py-2">{transaction.title}</td>
              <td className="border px-2 py-2">
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td className="border px-2 py-2">{transaction.category}</td>
              <td className="border px-2 py-2">
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </ContainerF>
  );
}
