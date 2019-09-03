import actions from '../constant' 

const checkUser = (name, password) => {
    data = { name, password }
    return dispatch => {
        dispatch ({
            type: actions.LOGIN,
            payload: data
        }) 
    }
}
    
export default { checkUser }