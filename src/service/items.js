const axios = require('axios')
const auth  = require('./auth')
const config = require('../config/config')

async function listItens() {
    let items = await axios.get(config.BASE_URL + '/items', {
        headers: {
            'Authorization': 'Bearer ' + auth.getToken()
        }
    })
    return items.data
}

async function toogleCheck(id) {
    let items = await axios.post(config.BASE_URL + '/item/'+id,{}, {
        headers: {
            'Authorization': 'Bearer ' + auth.getToken()
        }
    })
    return items.data
}

async function addItem(newItem) {
    let item = {
        item: newItem
    }
    let items = await axios.put(config.BASE_URL + '/item', item, {
        headers: {
            'Authorization': 'Bearer ' + auth.getToken()
        }
    })
    return items.data
}

async function removeItem(id) {
    let items = await axios.delete(config.BASE_URL + '/item/'+id, {
        headers: {
            'Authorization': 'Bearer ' + auth.getToken()
        }
    })
    return items.data
}

module.exports = {
    listItens,
    addItem,
    removeItem,
    toogleCheck
}