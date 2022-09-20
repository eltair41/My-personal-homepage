import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    padding-bottom: 109px;
    letter-spacing: 0.05em;
    word-break: break-word;
    font-size: 18px;
    transition: background 0.5s;
    background: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      padding-bottom: 32px;
    }
  }
`;