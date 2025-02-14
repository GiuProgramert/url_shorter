import { createContext } from "react";
import { ModalContextProps } from "../schemas/Modal";

export const ModalContext = createContext<ModalContextProps>({
  modal: undefined,
  isOpen: false,
  setModal: () => {},
  setIsOpen: () => {},
});
