import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { TodoContextProvider } from "./context/TodoContextProvider";
import GlobalStyles from "./styles/GlobalStyles";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TodoContextProvider>
        <Navbar/>
        <AppRouter />
      </TodoContextProvider>
      <GlobalStyles />
    </BrowserRouter>
    </QueryClientProvider>
);

