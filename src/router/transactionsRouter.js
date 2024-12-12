const { Router } = require('express');
const transactionsController = require("../controller/transactionsController");

const router = Router();

router.post('/',  (req, res) =>{
    transactionsController.create(req, res)
})

router.get('/',  (req, res) =>{
    transactionsController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    transactionsController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    transactionsController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    transactionsController.delete(req, res)
})

module.exports = router;