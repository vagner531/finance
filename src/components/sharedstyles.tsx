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
  justify-self: start;
  
  &:hover {
    transform: translateX(-100%);
    animation: ${moveLeft} 1s ease-in-out;
  }
`;

const Container = styled.div`
  @media(max-width: 640px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;

  }

`;

const AsideContainer = styled.aside`
@media (max-width: 640px) {
    display: none;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    display: none;
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
  font-weight: 600;
  margin: 0;
  line-height: 1.15;
  font-size: 3rem;
  text-align: left;
  text-decoration: none;
  color: #1a1a1a;

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
  font-size: 1em;
  margin: 1em;
  padding: 1rem 0.5rem;
  background: #4b74e7;
  border-radius: 9px;

  &:hover {
    background: #3862d4;
    }

`;

const Description = styled.p`
  text-align: left;
  line-height: 1;
  font-size: 1rem;
  color: #777777;
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


export { Container, Main, Title, Description, CodeTag, Button, AsideContainer, Image  };
