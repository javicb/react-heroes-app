import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({ publisher }) => {
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {
        getHeroesByPublisher(publisher).map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}
