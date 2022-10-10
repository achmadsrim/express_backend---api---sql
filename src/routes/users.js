const route = require('express').Router()

const { listUser, createUser, updateUser, deleteUser } = require('../controllers/users')

route.get('/', listUser)
route.post('/', createUser)
route.patch('/:no_id', updateUser)
route.delete('/:no_id', deleteUser)
module.exports = route