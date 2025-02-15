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

  const isOpenLogin = modal === "login" && isOpen;
  const isOpenRegister = modal === "register" && isOpen;

  return { modal, isOpen, openModal, closeModal, isOpenLogin, isOpenRegister };
}
