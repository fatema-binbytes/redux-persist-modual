import actions from '../constant'

const loginCredentials = {
  name: null,
  password: null
}
  const reducer = ( state = loginCredentials, action ) => { 
    switch(action.type) {
      case actions.LOGIN :
        state = action.payload
        break
      default :
        break
    }
    return state
  }
export default reducer