const { Router } = require('express');
const accountController = require("../controller/accountController");

const router = Router();

router.post('/',  (req, res) =>{
    accountController.create(req, res)
})

router.get('/',  (req, res) =>{
    accountController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    accountController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    accountController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    accountController.delete(req, res)
})

module.exports = router;