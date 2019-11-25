const initState = {
    authError: null
}

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR': console.log('LOGIN_ERROR')
            return { 
                ...state,
                authError: action.err.message
            }
            
            case 'LOGIN_SUCCESS': console.log('LOGIN_SUCCESS')
            return {
                ...state,
                authError: null
            }

            case 'LOGOUT_SUCCESS' : console.log('LOGOUT_SUCCESS')
            return state

            case 'SIGNUP_SUCCESS': console.log('SIGNUP_SUCCESS')
            return {
                ...state,
                authError: null
            }

            case 'SIGNUP_ERROR': console.log('SIGNUP_ERROR', action.err)
            return {
                ...state,
                authError: action.err.message
            }

            default:
            return state
    }

}

export default AuthReducer;