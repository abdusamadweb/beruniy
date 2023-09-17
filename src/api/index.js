import axios from 'axios'

export const API_URL = `https://incrm.uz/`

const $api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export default $api