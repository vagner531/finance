import styled  from 'styled-components';

export const ContainerH = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    background: #f4f4f5;
    border-radius: 0.3rem;
    color: #1e293b;

    th {
      font-weight: 500;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
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