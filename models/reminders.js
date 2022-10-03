module.exports = {
    reminders: [
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
        {
            id: "id test backend",
            title: "title test backend",
            message: "message test backend"
        },
    ],

    getAll(){
        return this.reminders
    },

    newReminder(title, message){
        this.reminders.push({id:idGenerator(), title, message})
    }

}

function idGenerator(){
    Math.random().toString(36).substring(2, 9)
}

