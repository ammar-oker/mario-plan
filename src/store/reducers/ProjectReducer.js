const initState = {
    projects: [
        {id: '1', title: 'Hello one', content: 'Lorem seprum Lorem seprum Lorem seprum'},
        {id: '2', title: 'Hello two', content: 'Lorem seprum Lorem seprum Lorem seprum'},
        {id: '3', title: 'Hello three', content: 'Lorem seprum Lorem seprum Lorem seprum'},
        {id: '4', title: 'Hello four', content: 'Lorem seprum Lorem seprum Lorem seprum'}
    ]
}

const ProjectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT': 
        console.log(action.project)
        return state;

        case 'CREATE_PROJECT_ERROR': 
        console.log('error', action.err)
        return state;

        default : 
        return state;
    }
}

export default ProjectReducer;