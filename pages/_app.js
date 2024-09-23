import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap');
    body{
      padding: 0;
      margin:0;
      .poppins-regular {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
    }

      .poppins-regular-italic {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: italic;
}

    }
`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />

    </>

  );
}
