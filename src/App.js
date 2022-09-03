import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";
import NowPlayingMoviePage from "./pages/NowPlayingMovie";
import UpcomingMoviePage from "./pages/UpcomingMovie";
import TopRatedMoviePage from "./pages/TopRatedMovie";
import TVShowsPage from "./pages/TVShows";
import AiringTodayTVPage from "./pages/AiringTodayTV";
import OnTheAirTVPage from "./pages/OnTheAirTV";
import TopRatedTVPage from "./pages/TopRatedTV";
import CategoryPage from "./pages/Category";
import PeoplePage from "./pages/People";
import PersonBioPage from "./pages/PersonBio";
import MovieBioPage from "./pages/MovieBio";
import TVShowsBioPage from "./pages/TVShowsBio";
import TermsOfServicePage from "./pages/TermsOfService";
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
          <Route path="/genres/:genre/:genre_name/:genre_id" element={<GenresPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
