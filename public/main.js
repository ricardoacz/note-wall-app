const deleteBtn = document.querySelectorAll('.delete-btn')
const messageBody = document.querySelectorAll('p.message')
const userLogElement = document.querySelector('.user-log')
const currentUser = userLogElement.dataset.currentuser

Array.from(deleteBtn).forEach(element => {
    element.addEventListener('click', deletePost)
})

Array.from(messageBody).forEach(element => {
    element.addEventListener('click', updatePost)
})

async function deletePost () {
    const postMessage = this.parentNode.dataset.id
    console.log(postMessage)

    try {
        const response = await fetch ('/wall/deletePost', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'postId': postMessage
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log('fail to reach db for delete', error)
    }
}

async function updatePost () {
    const updateMessage = this.parentNode.dataset.id
    const messageCreator = this.parentNode.dataset.username
    if (messageCreator !== currentUser) {
        return
    }
    console.log(updateMessage, messageCreator, currentUser)
    let newMessage = prompt("Update your post")
    console.log(newMessage)
    if (newMessage === null) {
        return 
    }
    console.log(newMessage)

    try {
        const response = await fetch ('/wall/updatePost', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'postId': updateMessage,
                'newMessage': newMessage
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch (error) {
        console.log('fail to reach db for delete', error)
    }
}