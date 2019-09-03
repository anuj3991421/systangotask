export const USER_SUCCESS = 'USER_SUCCESS';

export const addUserData = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: USER_SUCCESS, data:data });
  }
}
