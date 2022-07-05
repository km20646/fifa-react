import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";
import useModal from "../useModal";

const ConfirmModal = ({ title, message, cancelText = "취소", confirmText = "확인", handleClose, handleConfirm }) => {
    const { hideModal } = useModal();

    const onClose = () => {
        if (handleClose) {
            handleClose();
        }
        hideModal();
    };

    const onConfirm = async () => {
        if (handleConfirm) {
            await handleConfirm();
        }
        hideModal();
    };
    console.log(title);
    return (
        <Dialog open onClose={onClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" maxWidth="sm" fullWidth sx={{ whiteSpace: "break-spaces" }}>
            <DialogTitle id="confirm-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>{cancelText}</Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    {confirmText}
                </Button>
            </DialogActions>
        </Dialog>
    );
};
export default ConfirmModal;
