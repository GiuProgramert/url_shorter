import { useState } from "react";
import { ModalContext } from "./ModalContext";

interface Props {
  children: React.ReactNode;
}

export default function ModalProvider({ children }: Props) {
  const [modal, setModal] = useState<"login" | "register">();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modal, isOpen, setModal, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
