import styled, { keyframes } from "styled-components";

const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Image = styled.img`
  transition: transform 0.5s ease-in-out;
  align-self: center;
  justify-self: ;
  width: 30%;
  heigth: 30%;

  &:hover {
    transform: translateX(-100%);
    animation: ${moveLeft} 1s ease-in-out;
  }
`;

const Container = styled.div`
  @media (max-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  @media (max-width: 820px) {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }
`;

const AsideContainer = styled.aside`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 820px) {
    width: 100%;
  }

  /* @media (max-width: 1024px) {
    display: none;
  } */
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border-radius: 40px 0 40px 0;
`;

const Title = styled.h1`
  font-weight: 900;
  margin: 0;
  line-height: 1.15;
  font-size: 2rem;
  text-align: center;
  text-decoration: none;
  color: #1a1a1a;

  @media (max-width: 820px) {
    font-size: 1.5rem;
    width: 80%;

  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover,
    :focus,
    :active {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  color: #ffffff;
  font-weight: 700;
  font-size: 1em;
  margin-top: 6px;
  padding: 1rem 1.5rem;
  background: #4b74e7;
  border-radius: 9px;

  &:hover {
    background: #3862d4;
  }
`;

const Description = styled.p`
  width: 50%;
  text-align: center;
  line-height: 1.5;
  font-size: 1rem;
  color: #777777;
  @media (max-width: 820px) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;
const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;
const Titleimg = styled.h1`
  text-align: left;
  color: #0d2870;
  line-height: 1;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  @media (max-width: 820px) {
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;
const Descriptionimg = styled.p`
  text-align: left;
  color: #fff;
  font-weight: 500;

  @media (max-width: 640px) {
    /* display: none; */
    text-align: center;
  }
  @media (max-width: 820px) {
    font-size: 0.8rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;
export {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Button,
  AsideContainer,
  Image,
  Titleimg,
  Descriptionimg,
};
