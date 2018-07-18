// Action Creators
import * as types from './types'

export const addTest = (num) => {
  return {type: types.ADD_TEST, num: num}
}
