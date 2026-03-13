import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import type { UserDto } from "../types/userDTO";
import React, { useEffect } from "react";
import { getUsers } from "../services/userService";
import { BodyGenerico } from "../components/BodyGenerico";
import { TituloGenerico } from "../components/TituloGenerico";

export function Visualizar() {
    const navigate = useNavigate();
    const [clients, setClients] = React.useState<UserDto[]>([]);

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

    return (
        <BodyGenerico>
            <TituloGenerico value="Visualizar Clientes"/>
            <TableContainer component={Paper} sx={{ width: "100%", maxWidth: "480px" }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Nome</TableCell>
                            <TableCell align="center">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            clients.length === 0 ? (
                                <TableRow>
                                    <TableCell align="center" colSpan={2}>Nenhum usuário encontrado</TableCell>
                                </TableRow>
                            ) : (
                                clients.map((client) => (
                                    <TableRow key={client.id}>
                                        <TableCell align="center">{client.id}</TableCell>
                                        <TableCell align="center">{client.name}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="primary" onClick={() => navigate(`/editar/${client.id}`)}>Editar</Button>
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