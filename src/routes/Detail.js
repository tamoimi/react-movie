import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import styles from "./Detail.module.css";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data);
    setMovies(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Nav />
      {loading ? (
        <div className={styles.loader}></div>
      ) : (
        <div>
          <img
            src={movies.background_image}
            className={styles.background}
            alt="background_img"
          />
          <div className={styles.box}>
            <img src={movies.medium_cover_image} alt="cover_img" />
            <h1>{movies.title}</h1>
            <p>{movies.description_full}</p>
            <p>{movies.rating}</p>
          </div>
        </div>
      )}
    </>
  );
};
export default Detail;
