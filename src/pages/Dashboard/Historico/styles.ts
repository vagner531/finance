import styled from "styled-components";

export const ContainerF = styled.div`

  margin-top: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    background: #ca8a04;
    border-radius: 0.3rem;
    color: #1e293b;
    
    tbody{
      margin-bottom: 0.5rem;
    }

    th {
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;    
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 1rem;
      text-align: left;
      border: 0;
      background: #d1d5db;
      font-weight: 400;
      color: #9ca3af;
      &:first-child {
        color: #334155;
      }
    }
  }
`;



