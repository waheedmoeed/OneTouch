import { combineReducers } from 'redux'

import instReducer from './inst/inst_reducers'

const rootReducer = combineReducers({
    instagram: instReducer,
  })
  
  export default rootReducer