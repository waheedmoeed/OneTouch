import * as actions from './action'

export const initialState = {
  tried:true,
  token : {
    accessToken: "IGQVJWY1VLWG12ZAndjemNOcjNEV1RHRVZA3NFFyVGktb3VId3lOY3F6MXh3dS0xelFUTk42SnNOWllXMWQtZAHAwdDNHZADE3UE9oOXZAWdWlzcTQtYWZA6ZAFRleklQNWpyLXN4TzdhR0JB",
<<<<<<< HEAD
    userId: ""
=======
    userId: "17855978839920635"
>>>>>>> 3e041fa50b570155de47e2d6b0b206f0ccee9cbe
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