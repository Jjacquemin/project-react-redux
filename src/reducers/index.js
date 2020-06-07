import { combineReducers } from 'redux'
import UsersReducer from './reducer_users'
import ActiveUserReducer from './reducer_activeUser'

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer
})

export default rootReducer
