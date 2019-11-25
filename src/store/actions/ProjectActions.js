export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //perform some async code...
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.FirstName,
            authorLastName: profile.LastName,
            authorId,
            createdIn: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error: err})
        })
    }
}