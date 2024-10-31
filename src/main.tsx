import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import store from "./global/store.ts";
import "@mantine/core/styles.css";

import {MantineProvider} from "@mantine/core";

const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ToastContainer />
            <PersistGate loading={null} persistor={persistor}>
            <MantineProvider>
                        <App />
                    </MantineProvider>
            </PersistGate>
        </Provider>
    </StrictMode>
);
