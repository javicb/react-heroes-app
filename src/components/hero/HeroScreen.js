import { useParams, Navigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroByIs";
import { HeroCard } from "./HeroCard";

export const HeroScreen = () => {

  const { id } = useParams();
  const hero = getHeroById(id);

  if (!hero) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <div>
        <h1>Hero Screen</h1>
        <hr />
      </div>
      <div>
        <HeroCard {...hero} />
      </div>
    </div>
  )
}
