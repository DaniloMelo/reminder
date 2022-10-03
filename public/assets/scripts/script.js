const btnCreateReminder = document.querySelector('.btn-reminder')
const mural = document.querySelector('.mural')

function updateMural(){
    fetch('http://localhost:8080/api/all')
        .then(response => response.json())
        .then(data =>{
            let reminders = JSON.parse(data)

            let remindersList = ''

            reminders.forEach(reminder =>{
                let reminderElement = `<div class="reminder-card" id="${reminder.id}">
                                            <div class="reminder-title">
                                                <p>${reminder.title}</p>
                                            </div>
                                            <div class="reminder-message">
                                                <p>${reminder.message}</p>
                                            </div>
                                        </div>`
                remindersList += reminderElement
            })
        mural.innerHTML = remindersList
        })
}

function newReminder(){
    let title = document.querySelector('.title').value
    let message = document.querySelector('.message').value


    let reminder = {title, message}

    const options = {
        method: 'POST',
        headers: new Headers({'Content-Type':'application/json'}),
        body: JSON.stringify(reminder)
    }

    fetch('http://localhost:8080/api/new', options)
        .then(response => {
            updateMural()
            document.querySelector('.title').value = ''
            document.querySelector('.message').value = ''
        })
}

document.addEventListener('DOMContentLoaded', ()=>{
    updateMural()
})

btnCreateReminder.addEventListener('click', ()=>{
    newReminder()
})

