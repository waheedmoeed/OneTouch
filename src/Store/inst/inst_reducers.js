import * as actions from './action'

export const initialState = {
  tried:false,
  token : {
    accessToken: "",
    userId: ""
  },
}
  
  export default function instReducer(state = initialState, action) {
    switch (action.type) {
      case actions.SET_ACCESS_TOKEN://update other fields in state
        return { token :action.payload.token, tried: action.payload.tried}
      default:
        return state
    }
  }