const express = require('express')
const router = express.Router()
const reminders = require('../models/reminders')

router.get('all', (request, response)=>{
    response.json(JSON.stringify(reminders.getAll()))
})

router.post('new', (request, response)=>{
    let title = request.body.tiltle
    let message = request.body.message

    reminders.newReminder({title, message})

    response.send('Added Reminder')
})

module.exports = router