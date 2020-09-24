import { discoverDevices } from '../../services/broadlink';
import { setIsBusy } from '../layout/actionCreator';
import { GET_DEVICES, SET_SELECTED_DEVICE } from './actionType';

export const requestDevices = () => {
  return async dispatch => {
    dispatch(setIsBusy(true));
    await dispatch({
      type: GET_DEVICES,
      payload: discoverDevices(),
    })
      .then(() => {
        dispatch(setIsBusy(false));
      })
      .catch(() => {
        dispatch(setIsBusy(false));
      });
  };
};

export const setSelectedDevice = selectedDevice => {
  return async dispatch => {
    await dispatch({
      type: SET_SELECTED_DEVICE,
      payload: {
        selectedDevice,
      },
    });
  };
};
