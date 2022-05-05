import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
    <div>
      <div>
        <h1>Marvel Screen</h1>
        <hr />
      </div>
      <div>
        <HeroList publisher="Marvel Comics" />
      </div>
    </div>
  )
}