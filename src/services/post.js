const url = 'http://localhost:5555/orm/lists/';

const createTodoApi = (obj) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
}

export default createTodoApi;