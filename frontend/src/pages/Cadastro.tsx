import {Button, TextField} from '@mui/material'
import { FormGenerico } from '../components/FormGenerico'
import { createUser } from '../services/userService'
import { useNavigate } from 'react-router-dom'
import { TituloGenerico } from '../components/TituloGenerico'
import { BodyGenerico } from '../components/BodyGenerico'

export function Cadastro() {
    const navigate = useNavigate()
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const nome = formData.get('nome') as string
        await createUser(nome)
        navigate("/")
    }
    
    return (
        <BodyGenerico>
            <TituloGenerico value='Cadastro' />
            <FormGenerico onSubmit={handleSubmit}>
                <TextField label="Nome" name='nome' type='text' fullWidth />
                <Button variant='contained' color='primary' type='submit' fullWidth>Cadastrar</Button>
            </FormGenerico>
            <Button variant="contained" color="primary" onClick={() => navigate("/")}>Voltar</Button>
        </BodyGenerico>
    )
}