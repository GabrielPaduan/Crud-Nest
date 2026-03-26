import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFFFFF',
  border: '2px solid #000',
  boxShadow: 24,
};

interface ModalExclusaoGenericoProps {
    handleCloseModal: () => void; 
    openModal: boolean
    handleSetClientResponse: (response: boolean) => void
}

export function ModalExclusaoGenerico({handleCloseModal, openModal, handleSetClientResponse}: ModalExclusaoGenericoProps) {
    const handleModalAction = () => {
        handleSetClientResponse(true)
        handleCloseModal
    }
    return (
        <Modal
            open={openModal} 
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{ ...style }}
        >
            <Box bgcolor={"#FFFFFF"} height={"100%"} display={"flex"} justifyContent={"space-around"} alignItems={"center"} flexDirection={"column"}>
                <Typography variant="h6" color="black">ALERTA!</Typography>
                <Typography align="center" variant="h6" color="black">Você tem certeza que deseja excluir o usuário?</Typography>
                <Box display={"flex"} justifyContent={"center"} gap={2} width={"100%"}>
                    <Button variant="contained" color="primary" onClick={handleModalAction}>SIM</Button>
                    <Button variant="contained" color="primary" onClick={handleCloseModal}>NÃO</Button>
                </Box>
            </Box>
        </Modal>
    )
}