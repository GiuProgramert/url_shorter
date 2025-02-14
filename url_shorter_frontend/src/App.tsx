import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Shorted from "./routes/Shorted";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProvidersContainer from "./context/ProvidersContainer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProvidersContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/:slug" element={<Shorted />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProvidersContainer>
    </QueryClientProvider>
  );
}
