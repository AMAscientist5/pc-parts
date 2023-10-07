import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
// import { ToastProvider } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <SessionProvider session={pageProps.session}>
      {/* <ToastProvider> */}
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
      {/* </ToastProvider> */}
    </SessionProvider>
  );
}
