//Action types related to access token and user
export const SET_INST_ACCESS_TOKEN = 'SET INST ACCESS TOKEN'

  
export const setInstAccessToken = token => ({
    type: SET_INST_ACCESS_TOKEN,
    payload: token,
})