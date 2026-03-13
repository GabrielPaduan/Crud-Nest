import Button from "@mui/material/Button";
import { BodyGenerico } from "../components/BodyGenerico";
import { FormGenerico } from "../components/FormGenerico";
import { TituloGenerico } from "../components/TituloGenerico";
import TextField from "@mui/material/TextField";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserById, updateUser } from "../services/userService";
import type { UserDto } from "../types/userDTO";
import React from "react";

export function Editar() {
    const navigate = useNavigate()
    const clientId = Number(useParams().id)
    const [client, setClient] = React.useState<UserDto>()

    useEffect(() => {
        const fetchUser = async () => {
            const response = await getUserById(clientId)
           
            setClient(response)
        }
        fetchUser()
    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await updateUser(client || {id: 0, name: ""})
        setClient(response)
        navigate("/")
    }

    return (
        <BodyGenerico>
            <TituloGenerico value="Editar" />
            <FormGenerico onSubmit={handleSubmit}>
                <TextField label="Nome" name='nome' type='text' fullWidth value={client?.name} onChange={(e) => setClient({id: clientId, name: e.target.value})} />
                <Button variant='contained' color='primary' type='submit' fullWidth>Salvar</Button>
            </FormGenerico>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>Voltar</Button>
        </BodyGenerico>
    )
}