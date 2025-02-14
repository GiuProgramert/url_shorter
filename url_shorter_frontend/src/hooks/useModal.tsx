import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

export default function useModal() {
  const { modal, isOpen, setIsOpen, setModal } = useContext(ModalContext);

  const openModal = (modal: "login" | "register") => {
    setIsOpen(true);
    setModal(modal);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModal(undefined);
  };

  return { modal, isOpen, openModal, closeModal };
}
