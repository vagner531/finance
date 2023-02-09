import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
  }
  const roboto = Roboto({
    weight: ['400', '700', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
})
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  .react-modal-overlay {
    width:  100%;
    background: rgba(0,0,0 ,0.5);
    
    position: fixed; 
    top: 0;
    bottom:0;
    rigth:0;
    left:0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width:  100%;
    max-width: 576px;
    background: #fff;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
