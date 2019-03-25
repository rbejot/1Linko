export const simpleAction = (str) => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: str
  })
}