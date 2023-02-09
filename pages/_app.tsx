import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalstyles";
import type { AppProps } from "next/app";
import { theme } from "../styles/theme";
import "../styles/globals.css";
import { Model, createServer } from "miragejs";
import { TransactionsProvider } from "../src/TransactionsContext";


createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 600,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 09:00:00'),
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
      </TransactionsProvider>
    </>
  );
}
