import ConfirmModal from "./ConfirmModal";
import AlertModal from "./AlertModal";
import { useRecoilState } from "recoil";
import { modalState } from "../modal";
// key 용도
export const ModalTypes = {
    ConfirmModal: "ConfirmModal",
    AlertModal: "AlertModal",
};
// 모달 컴포너틑가 key값에 따라 import
const ModalComponents = {
    [ModalTypes.ConfirmModal]: ConfirmModal,
    [ModalTypes.AlertModal]: AlertModal,
};
//modalstate는 store에 존재하는 모달의 상태값
// modalType은 ModalTypes의 타입으로 정의되어 confirm 혹은 alert를 의미함.
const GlobalModal = () => {
    const { modalType, modalProps } = useRecoilState(modalState)[0] || {};
    const renderComponent = () => {
        if (!modalType) {
            return null;
        }
        const ModalComponent = ModalComponents[modalType];
        return <ModalComponent {...modalProps} />;
    };
    return <>{renderComponent()}</>;
};
export default GlobalModal;
