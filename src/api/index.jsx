import axios from 'axios'

export const serverClient = axios.create({
    baseURL: 'http://10.2.51.152:3000',
})