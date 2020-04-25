import * as actions from './action'

export const initialState = {
  tried:false,
  token : {
    accessToken: "IGQVJWY1VLWG12ZAndjemNOcjNEV1RHRVZA3NFFyVGktb3VId3lOY3F6MXh3dS0xelFUTk42SnNOWllXMWQtZAHAwdDNHZADE3UE9oOXZAWdWlzcTQtYWZA6ZAFRleklQNWpyLXN4TzdhR0JB",
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