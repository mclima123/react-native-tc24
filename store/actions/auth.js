import {
  clearLoginData,
  setLoginData,
} from '../../helpers/localStorage/localStorageManager';

export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

const API_KEY = 'AIzaSyBq7bDlv3DDs_SDQv59zkrdSQpZLfTSku8';

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const authenticate = (userId, token, expiresIn) => {
  //calculate expiration date
  const exp = parseInt(expiresIn);
  const expirationDate = new Date(Date.now() + exp * 1000).toISOString();

  setLoginData(userId, token, expirationDate);

  return {
    type: AUTHENTICATE,
    userId: userId,
    token: token,
    didTryAL: true,
  };
};

export const signUp = (email, password) => {
  return async dispatch => {
    //api call
    const apiCall = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    const response = await apiCall.json();

    if (!apiCall.ok) {
      throw new Error(response.error.message);
    }

    const userId = response.localId;
    const token = response.idToken;
    const expiration = response.expiresIn;

    //if successfull, dispatch action
    dispatch(authenticate(userId, token, expiration));
  };
};

export const signIn = (email, password) => {
  return async dispatch => {
    //api call
    const apiCall = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    const response = await apiCall.json();

    if (!apiCall.ok) {
      throw new Error(response.error.message);
    }

    const userId = response.localId;
    const token = response.idToken;
    const expiration = response.expiresIn;

    //if successfull, dispatch action
    dispatch(authenticate(userId, token, expiration));
  };
};

export const logOut = () => {
  clearLoginData();
  return { type: LOG_OUT };
};
