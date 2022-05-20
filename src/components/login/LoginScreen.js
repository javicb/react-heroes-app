import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        user: 'Javier',
      }
    }

    context.dispatch(action);

    navigate('/', { replace: true });
  }

  return (
    <div className='container mt-5'>
      <div>
        <h1>Login</h1>
        <hr />
      </div>
      <div>
        <button className='btn btn-primary' onClick={handleLogin} >Login</button>
      </div>
    </div>
  )
}