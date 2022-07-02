import React from "react";
import "../styles/globals.css";
import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
    return (
        <NativeBaseProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <QueryClientProvider client={queryClient}>
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </PersistGate>
            </Provider>
        </NativeBaseProvider>
    );
}

export default MyApp;
