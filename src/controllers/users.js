const { listUserModel, createUserModel, updateUserModel, deleteUserModel } = require('../models/users')

exports.listUser = (req, res) => {
    listUserModel(results => {
        return res.send({
            success: true,
            message: 'List users',
            results
        })
    })
}

exports.createUser = (req, res) => {
    createUserModel(req.body, results => {
        if (results.affectedRows > 0) {
            return res.send({
                success: true,
                message: 'Create users',
                results
            })
        } else {
            return res.send({
                success: false,
                message: 'Field Create users'
            })
        }
    })
}

exports.updateUser = (req, res) => {
    updateUserModel(req.params.no_id, req.body, results => {
        if (results.affectedRows > 0) {
            return res.send({
                success: true,
                message: 'Update users',
            })
        } else {
            return res.send({
                success: false,
                message: 'Field Update users'
            })
        }
    })
}

exports.deleteUser = (req, res) => {
    deleteUserModel(req.params.no_id, results => {
        if (results.affectedRows > 0) {
            return res.send({
                success: true,
                message: 'Delete users',
            })
        } else {
            return res.send({
                success: false,
                message: 'Field Delete users'
            })
        }
    })
}