import axios from 'axios'

export const api = axios.create({
    baseURL: process.env.API_CONNECTION || 'https://viacep.com.br/ws'
})