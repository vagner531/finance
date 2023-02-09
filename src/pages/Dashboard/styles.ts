import styled from "styled-components";

export const Buttondash = styled.button`
  color: #ffffff;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.8rem 1.5rem;
  border-radius: 9px;
  border: 1px solid #fff;

  &:hover {
    background: #3862d4;
  }
`;

export const Buttonlog = styled.button`
  color: #ffffff;
  font-weight: 700;
  font-size: 1em;
  margin: 1em;
  padding: 0.8rem 0.8rem;
  border-radius: 30px;
  border: 1px solid #fff;

  &:hover {
    background: #3862d4;
  }
`;

export const Maindash = styled.main`
  background: rgb(209 209 209 / 37%);
  border-radius: 20px;

  div {
    background: #fff;
    padding: 1.5rem;
    border-radius: 0.5rem;
    color: #374151;

    header {
      display: flex;
      font-size: 1rem;
      font-weight: 600;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: 800;
      line-height: 3rem;
    }
    &.highlight-background {
      background: #22c55e;
      color: #fff;
    }
  }

  @media (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  @media (max-width: 820px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  /* @media (max-width: 830px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  } */
`;

export const Buttonex = styled.button`
  border-radius: 10px;
  text-align: center;
  padding: 2px;
`;

export const ContainerF = styled.form`
  h2 {
    color: #1e293b;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 700;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: #9ca3af;
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: #e11d48;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionsTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioboxProps {
 isActive: boolean;
 activeColor: 'green' | 'red';
}

const colors = {
  green: '#bbf7d0',
  red: '#fecdd3'
};

export const Radiobox = styled.button<RadioboxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${(props) => props.isActive 
  ? colors[props.activeColor]
  : 'transparent'
  };

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #94a3b8;
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: #334155;
  }
`;
