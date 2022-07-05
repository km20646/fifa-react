import { atom } from "recoil";
import { ModalTypes } from "./components/GlobalModal";
import { ConfirmModalProps } from "./components/ConfirmModal";
import { AlertModalProps } from "./components/AlertModal";

export const modalState = atom({
    key: "modalState",
    default: null,
});
