import styled from "styled-components";

const Buttondash = styled.button`
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

const Buttonlog = styled.button`
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

const Maindash = styled.main`
background: rgb(209 209 209 / 37%);
  border-radius: 20px;
  text-align: center;
  
`;

const Article = styled.article`
  border-radius: 10px;
  text-align: center;
`;

const Buttonex = styled.button`
  border-radius: 10px;
  text-align: center;
  padding: 2px;
`;


export { Buttondash, Buttonlog, Maindash, Article, Buttonex };
