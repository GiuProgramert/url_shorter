import React from "react";

export interface ModalContextProps {
  modal?: "login" | "register";
  isOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<"login" | "register" | undefined>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
