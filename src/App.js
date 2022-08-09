import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import NowPlayingMoviePage from "./pages/Now_Playing_Movie";
import UpcomingMoviePage from "./pages/Upcoming_Movie";
import TopRatedMoviePage from "./pages/Top_Rated_Movie";
import TVShowsPage from "./pages/TV_Shows";
import AiringTodayTVPage from "./pages/Airing_Today_TV";
import OnTheAirTVPage from "./pages/On_The_Air_TV";
import TopRatedTVPage from "./pages/Top_Rated_TV";
import CategoryPage from "./pages/Category";
import PeoplePage from "./pages/People";
import PersonBioPage from "./pages/Person_Bio";
import MovieBioPage from "./pages/Movie_Bio";
import TVShowsBioPage from "./pages/TV_Shows_Bio";
import TermsOfServicePage from "./pages/Terms_Of_Service";
import GenresPage from "./pages/Genres";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/movie/now_playing" element={<NowPlayingMoviePage />} />
        <Route path="/movie/upcoming" element={<UpcomingMoviePage />} />
        <Route path="/movie/top_rated" element={<TopRatedMoviePage />} />
        <Route path="/tv" element={<TVShowsPage />} />
        <Route path="/tv/airing_today" element={<AiringTodayTVPage />} />
        <Route path="/tv/on-the-air" element={<OnTheAirTVPage />} />
        <Route path="/tv/top_rated" element={<TopRatedTVPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/people/:id" element={<PersonBioPage />} />
        <Route path="/movie/:id" element={<MovieBioPage />} />
        <Route path="/tv/:id" element={<TVShowsBioPage />} />
        <Route path="/Terms_Of_Service" element={<TermsOfServicePage />} />
        <Route path="/genres/:genres_id" element={<GenresPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
