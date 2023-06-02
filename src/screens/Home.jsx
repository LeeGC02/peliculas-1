import React, { useEffect, useState } from "react";
import Serch from "../components/Serch";
import PosterCard from "../components/SeccionMovie";
import SeccionMovie from "../components/SeccionMovie";
import TabBar from "../components/TabBar";
import Slider from "../components/Slider";
import Movies from "../components/Movies";

const Home = () => {
  const [newMovies, setNewMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=4e11256f8faf137ed6e8356871b63ee4"
    )
      .then((response) => response.json())
      .then((data) => setNewMovies(data.results))
      .catch((error) => console.log(error));
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e11256f8faf137ed6e8356871b63ee4"
    )
      .then((response) => response.json())
      .then((data) => setComingSoonMovies(data.results))
      .catch((error) => console.log(error));
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e11256f8faf137ed6e8356871b63ee4"
    )
      .then((response) => response.json())
      .then((data) => setTopMovies(data.results))
      .catch((error) => console.log(error));
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4e11256f8faf137ed6e8356871b63ee4"
    )
      .then((response) => response.json())
      .then((data) => setActionMovies(data.results))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Serch />
      <Slider category="New" movies={newMovies || []} />
      <Slider category="Coming Soon" movies={comingSoonMovies || []} />
      <Slider category="Top Movies" movies={topMovies || []} />
      <Slider category="Action Movies" movies={actionMovies || []} />
      <TabBar />
    </div>
  );
};

export default Home;
