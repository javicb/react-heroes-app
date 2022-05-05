import { HeroList } from '../hero/HeroList';

export const DcScreen = () => {
  return (
    <div>
      <div>
        <h1>DC Screen</h1>
        <hr />
      </div>
      <div>
        <HeroList publisher="DC Comics" />
      </div>
    </div>
  )
}
