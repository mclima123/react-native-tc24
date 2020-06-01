import { AUTHENTICATE, LOG_OUT, SET_DID_TRY_AL } from '../actions/auth';

const initialState = {
  token: null,
  userId: null,
  didTryAL: false,
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE: {
      return {
        token: action.token,
        userId: action.userId,
        didTryAL: true,
      };
    }

    case SET_DID_TRY_AL: {
      return {
        ...state,
        didTryAL: true,
      };
    }

    case LOG_OUT: {
      return { ...initialState, didTryAL: true };
    }

    default:
      return state;
  }
};

export default authenticationReducer;
