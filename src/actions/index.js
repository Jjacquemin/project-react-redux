export const USER_SELECTED = 'USER_SELECTED' // utilisée dans le reducer
export const  selectUser = (user) => {
  console.log('selected : ', user)
  return {
    type: USER_SELECTED,
    payload: user
  }
}
