const jwt = require('jsonwebtoken');
const axios = require('axios')
const config = require('../config/config')

function getUser() {
    let token = window.localStorage.getItem('token');
    if (token) {
        return jwt.decode(token);
    }
    return null;
}

function setUser(user) {
    window.localStorage.setItem('token', user)
}

function logout() {
    window.localStorage.removeItem('token')
}

function getToken() {
    let token = window.localStorage.getItem('token');
    if (token) {
        return token;
    }
    return null;
}

async function login(email, password) {
    let response = await axios.post(
        config.BASE_URL + '/token',
        {
            'email': email,
            'password': password
        },
        {
            'Content-Type': 'application/json'
        }
    )

    return response.data
}

module.exports = {
    getUser,
    setUser,
    logout,
    login,
    getToken
}