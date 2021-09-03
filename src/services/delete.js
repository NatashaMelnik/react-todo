const url = 'http://localhost:5555/orm/lists/';

const deleteApi = (obj) => {
    
    return fetch(url+obj.list_id+'/tasks/', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
        .then(response => response.json())
}

export default deleteApi;