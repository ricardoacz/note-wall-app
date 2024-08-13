const deleteBtn = document.querySelectorAll('.delete-btn')

Array.from(deleteBtn).forEach(element => {
    element.addEventListener('click', deletePost)
})

async function deletePost () {
    const postMessage = this.parentNode.dataset.id
    console.log(postMessage)

    try {
        const response = await fetch ('/deletePost', {
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