const url = 'http://localhost:5555/orm/lists/';

const Get = (what, body) => {
    switch (what) {
        case 'listsNlist':
            return GetAPI(`/all-lists-single/${body}`)
        case 'lists':
            return GetAPI(`/all-lists`);
        case 'tasks':
            return GetAPI(`/all-tasks`);
        case 'list':
            return GetAPI(`/${body}/tasks`);
        case 'task':
            return GetAPI(`/${body.listId}/tasks/${body.taskId}`);
        case 'today':
            return GetAPI(`/today`);
        default:
            return;
    }
}

async function GetAPI(param) {

    let response;
    let result;

    try {
        response = await fetch(url + param);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            result = await response.json();
        }
    } catch (e) {
        console.log(e);
    }

    return result;
}

export default Get;