import AuthProvider from "./AuthProvider";
import ModalProvider from "./ModalProvider";
import { ThemeProvider } from "./ThemeProvider";

const providers = [AuthProvider, ModalProvider, ThemeProvider];

interface Props {
  children: React.ReactNode;
}

export default function ProvidersContainer({ children }: Props) {
  return providers.reduce((children, Provider) => {
    return <Provider>{children}</Provider>;
  }, children);
}
