import Get from './get';

const fetchServer = (requestType, body) => {
    switch (requestType) {
        case 'GetAllLists':
            return Get('lists');
        case 'GetAllTasks':
            return Get('tasks');
        case 'GetListById':
            return Get('list', body);
        case 'GetTaskById':
            return Get('task', body);
        // case 'GetTask':
        //     return GetTaskById();
        // case 'Post':
        //     return Post();
        // case 'Patch':
        //     return Patch();
        // case 'Delete':
        //     return Delete();
        default:
            return;
    }
}

export default fetchServer;