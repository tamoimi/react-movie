import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log("json", json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>detail</h1>
    </>
  );
};
export default Detail;
