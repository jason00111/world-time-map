import * as types from './actionTypes'

export const tick = () => ({
  type: types.TICK
})

export const startTicks = () => (dispatch) => {
  const timerId = setInterval(() => dispatch(tick()), 1000)

  dispatch(saveTimerId({ timerId }))

  return Promise.resolve()
}

export const stopTicks = () => (dispatch, getState) => {
  const { currentTime: { timerId } } = getState()

  clearInterval(timerId)

  return Promise.resolve()
}

export const saveTimerId = ({ timerId }) => ({
  type: types.SAVE_TIMER_ID,
  timerId
})
