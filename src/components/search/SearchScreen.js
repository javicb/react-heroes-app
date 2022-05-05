import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: ''
  });

  const { searchText } = formValues;
  const heroesFiltered = getHeroesByName(searchText);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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