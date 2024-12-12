const { Router } = require('express');
const notificationsController = require("../controller/notificationController");

const router = Router();

router.post('/',  (req, res) =>{
    notificationsController.create(req, res)
})

router.get('/',  (req, res) =>{
    notificationsController.getAll(req, res)
})

router.get('/:id',  (req, res) =>{
    notificationsController.getOne(req, res)
})

router.put('/:id',  (req, res) =>{
    notificationsController.update(req, res)
})

router.delete('/:id',  (req, res) =>{
    notificationsController.delete(req, res)
})

module.exports = router;