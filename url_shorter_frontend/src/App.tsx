import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import Shorted from "./routes/Shorted";
import ProvidersContainer from "./context/ProvidersContainer";
import { Toaster } from "react-hot-toast";
import Modals from "./components/Modals";

export default function App() {
  return (
    <ProvidersContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shorted/:slug" element={<Shorted />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Modals />
      <Toaster />
    </ProvidersContainer>
  );
}
