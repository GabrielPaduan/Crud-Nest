import type { UserDto } from "../types/userDTO"
import api from "./api"


export const getUsers = async () =>{
    const response = await api.get('/user')
    return response.data
}

export const getUserById = async (id: number) => {
    const response = await api.get(`/user/getById/${id}`)
    return response.data
}

export const createUser = async (name: string) => {
    const response = await api.post('/user', { name })
    return response.data
}

export const updateUser = async (user: UserDto) => {
    const response = await api.put(`/user/${user.id}`, { name: user.name })
    return response.data
}