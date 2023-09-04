import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../../apollo-client-mutation";
// import { GET_HEADER } from "../../lib/queryes/Header";
import { CartProvider } from "./components/CartContext";
import Header from "./components/commonComponets/Header";
import Footer from "./components/commonComponets/Footer";
export default function App({ Component, pageProps }) {
  return (
    <>
      <CartProvider>
        <ApolloProvider client={client}>
          <Header />
          <Component {...pageProps} />

          <Footer />
        </ApolloProvider>
      </CartProvider>
    </>
  );
}
