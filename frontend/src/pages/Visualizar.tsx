import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { UserDto } from "../types/userDTO";
import React, { useEffect } from "react";
import { deleteUser, getUsers } from "../services/userService";
import { BodyGenerico } from "../components/BodyGenerico";
import { TituloGenerico } from "../components/TituloGenerico";
import { ModalExclusaoGenerico } from "../components/ModalExclusaoGenerico";

export function Visualizar() {
    const navigate = useNavigate();
    const [clients, setClients] = React.useState<UserDto[]>([]);
    const [openModalExclusao, setOpenModalExclusao] = React.useState(false)
    const [userToDelete, setUserToDelete] = React.useState<number>(0)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setClients(response);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        }

        fetchUsers();
    }, [])

    const handleUserResponse = async (response: boolean) => {
        if (response == true) {
            await deleteUser(userToDelete)
            setClients(clients.filter( client => client.id !== userToDelete))
            handleCloseModalExclusao()
        }
    }

    const handleOpenModalExclusao = (id: number) => {
        setUserToDelete(id)
        setOpenModalExclusao(true)
    }

    const handleCloseModalExclusao = () => {
        setOpenModalExclusao(false)
    }

    

    return (
        <BodyGenerico>
            <ModalExclusaoGenerico
                handleSetClientResponse={handleUserResponse}
                handleCloseModal={handleCloseModalExclusao}
                openModal={openModalExclusao}
            />
            <TituloGenerico value="Visualizar Clientes"/>
            <TableContainer component={Paper} sx={{ width: "100%", maxWidth: "480px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center" colSpan={4}>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            clients.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={4}>Nenhum usuário encontrado</TableCell>
                                </TableRow>
                            ) : (
                                clients.map((client) => (
                                    <TableRow key={client.id}>
                                        <TableCell align="center">{client.id}</TableCell>
                                        <TableCell align="center">{client.name}</TableCell>
                                        <TableCell align="center">
                                            <Box display={"flex"} justifyContent={"center"} gap={1}>
                                                <Button variant="contained" color="primary" onClick={() => navigate(`/editar/${client.id}`)}><Typography variant="h6" fontSize={"10px"}>Editar</Typography></Button>
                                                <Button variant="contained" color="error" onClick={() => handleOpenModalExclusao(client.id)}><Typography variant="h6" fontSize={"10px"}>Delete</Typography></Button>
                                            </Box>
                                        </TableCell>
                                </TableRow>
                                ))
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={() => navigate("/cadastro")}>Cadastrar</Button>
        </BodyGenerico>
    )
}