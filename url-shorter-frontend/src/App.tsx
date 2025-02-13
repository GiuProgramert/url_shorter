import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./routes/Layout";
import { ThemeProvider } from "./context/ThemeProvider";
import Home from "./routes/Home";
import Shorted from "./routes/Shorted";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shorted" element={<Shorted />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
