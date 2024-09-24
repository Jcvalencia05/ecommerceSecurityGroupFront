import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;600&display=swap');
    body{
    background:#eee;
      padding: 0;
      margin:0;
      font-family: "Poppins", system-ui;
      font-weight: 200;
      font-style: normal;

`;
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
