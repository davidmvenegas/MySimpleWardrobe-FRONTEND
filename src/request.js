import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTU2NmUxMWEzZjI1NzZkNzVjMjAyZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjUxOTk0NCwiZXhwIjoxNjQyNzc5MTQ0fQ.vE6b6nFfTF9Lk4HEK9wT18-3BZTxu2Rlzr8v39_t-JE"

export const generalRequest = axios.create({
    baseURL: BASE_URL
})
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})