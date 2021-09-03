const url = 'http://localhost:5555/orm/lists/';

const changeTaskStatusApi = (obj) => {

    return fetch(url+obj.list_id+'/tasks', {
        method: 'PATCH',
        body: JSON.stringify({
            id: obj.id,
            done: !obj.done
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(response => response.json());

}

export default changeTaskStatusApi;