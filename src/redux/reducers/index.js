import { combineReducers } from 'redux'
import account from './accountReducer'
import dish from './dishReducer'
import app from './appReducer'
import cart from './cartReducer.js'
import comment from './commentReducer.js'
import user from './userReducer.js'

const rootReducer = combineReducers({
  account,
  app,
  dish,
  cart,
  comment,
  user
})

export default rootReducer
