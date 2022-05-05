import { useNavigate } from "react-router-dom"

export const LoginScreen = () => {

  const navigate = useNavigate();


  const handleLogin = () => {
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