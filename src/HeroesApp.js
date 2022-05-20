import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const initialState = () => {
  return JSON.parse(localStorage.getItem('user')) || { isAuthenticated: false }
}

export const HeroesApp = () => {

  const [state, dispatch] = useReducer(authReducer, {}, initialState);

  useEffect(() => {
    if (!state) return;
    localStorage.setItem('user', JSON.stringify(state));
  }, [state])

  return (
    <AuthContext.Provider value={
      {
        state,
        dispatch,
      }
    } >
      <AppRouter />
    </AuthContext.Provider>
  )
}
