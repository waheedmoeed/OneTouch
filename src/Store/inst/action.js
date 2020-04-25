//Action types related to access token and user
export const SET_ACCESS_TOKEN = 'SET ACCESS TOKEN'

  
export const setAccessToken = token => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
})