import { Route, Routes } from 'react-router-dom'
import { Cadastro } from '../pages/Cadastro'
import { Visualizar } from '../pages/Visualizar'
import { Editar } from '../pages/Editar'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Visualizar />} />
            <Route path="/editar/:id" element={<Editar />} />
        </Routes>
    )
}