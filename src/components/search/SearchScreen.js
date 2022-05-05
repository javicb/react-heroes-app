import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <div>
      <div>
        <h1>Search Screen</h1>
        <hr />
      </div>
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch} >
            <input type='text' className='form-control' placeholder='Buscar un héroe' name='searchText' autoComplete='off' value={searchText} onChange={handleInputChange} />
            <button type='submit' className='btn btn-outline-primary mt-1'>Buscar</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />
          <ul className='list-group'>

            {heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}