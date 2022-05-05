import { Route, Routes } from "react-router-dom"
import { DcScreen } from "../components/dc/DcScreen"
import { MarvelScreen } from "../components/marvel/MarvelScreen"
import { HeroScreen } from "../components/hero/HeroScreen"
import { SearchScreen } from "../components/search/SearchScreen"
import { Navbar } from "../components/ui/NavBar"

export const DashboardRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/marvel" element={<MarvelScreen />} />
        <Route path="/dc" element={<DcScreen />} />
        <Route path="/hero/:id" element={<HeroScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/" element={<MarvelScreen />} />
      </Routes>
    </div>
  )
}
