//Action types related to access token and user
export const SET_INST_BASIC_ACCESS_TOKEN = 'SET INST BASIC ACCESS TOKEN'

  
export const setInstBasicAccessToken = token => ({
    type: SET_INST_BASIC_ACCESS_TOKEN,
    payload: token,
})