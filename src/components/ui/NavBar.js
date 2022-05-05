import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login', { replace: true });
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

      <Link to="/" className="navbar-brand">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink to="/marvel" className="nav-item nav-link">
            Marvel
          </NavLink>

          <NavLink to="/dc" className="nav-item nav-link">
            DC
          </NavLink>

          <NavLink to="/search" className="nav-item nav-link" onClick={handleLogout}>
            Search
          </NavLink>


        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span className='nav-item nav-link text-info'>
            Javier
          </span>
          <button className="nav-item nav-link btn" onClick={handleLogout} >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  )
}