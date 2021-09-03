import Get from './get';
import Post from './post';
import Patch from './patch';
import Delete from './delete';

const fetchServer = (requestType, body) => {
    switch (requestType) {
        case 'GetListsAndStartList':
            return Get('listsNlist', body);
        case 'GetAllLists':
            return Get('lists');
        case 'GetAllTasks':
            return Get('tasks');
        case 'GetListById':
            return Get('list', body);
        case 'GetTaskById':
            return Get('task', body);
        case 'GetTodayTasks':
            return Get('today');
        case 'Post':
            return Post(body);
        case 'Patch':
            return Patch(body);
        case 'Delete':
            return Delete(body);
        default:
            return;
    }
}

export default fetchServer;