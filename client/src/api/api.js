import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 1000,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

const sendAPI = {
    auth(data) {
        return instance.post('/', {
            act: 'auth',
            login: data.login,
            pass: data.pass
        });
    },
    reg(data) {
        return instance.post('/', {
            act: 'reg',
            login: data.login,
            pass: data.pass
        })
    },
    change(data) {
        return instance.post('/', {
            act: 'change',
            pass: data.pass
        })
    }
}

export default sendAPI;