import sessionApi from '../api/SessionApi';

export function loginUser(credentials) {
  return function(dispatch) {
    return sessionApi.login(credentials)
      .then(response => {
        if(response.jwt){
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        }
        else if(response.errors) {
          dispatch(flashError(response.errors));
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function loginSuccess() {
  return {
    type: 'LOG_IN_SUCCESS'
  }
}

export function logoutUser() {
  return function(dispatch){
    sessionStorage.removeItem('jwt');
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export function changePasswordInput(newInput) {
  return {
    type: 'CHANGE_PASSWORD_INPUT',
    payload: newInput,
  }
}

export function changeEmailInput(newInput) {
  return {
    type: 'CHANGE_EMAIL_INPUT',
    payload: newInput,
  }
}

export function clearLoginInput() {
  return {
    type: 'CLEAR_LOGIN_INPUT'
  }
}

export function changeConfirmInput(newInput) {
  return {
    type: 'CHANGE_CONFIRM_INPUT',
    payload: newInput,
  }
}

export function signupUser(credentials) {
  return function(dispatch) {
    return sessionApi.signup(credentials)
      .then(response => {
        if(response.jwt){
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        }
        else if(response.errors){
          dispatch(flashError(response.errors));
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function flashError(messages) {
  return {
    type: 'NEW_FLASH_MESSAGE',
    payload: messages
  }
}

export function clearFlash() {
  return {
    type: 'CLEAR_FLASH_MESSAGE'
  }
}
