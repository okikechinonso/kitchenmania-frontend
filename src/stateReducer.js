export default function StateReducer(state, action) {
  switch (action.type) {
    case 'LOGIN': {
      localStorage.setItem('token', action.payload.access_token)
      localStorage.setItem('refresh_token', action.payload.refresh_token)
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        alert: {
          message: action.successMessage.message,
          color: 'success',
          status: action.successMessage.status,
          show: false,
        },
        isAuthenticated: true,
        loading: false,
      }
    }
    
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

