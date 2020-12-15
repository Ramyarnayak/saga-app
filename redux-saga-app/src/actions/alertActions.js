import { SET_ALERT } from '../reducers/types';

export const setAlertAction = (str) => {
  return { type: SET_ALERT, payload: str };
};