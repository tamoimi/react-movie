const Movie = ({ coverImg, title, summary, genres }) => {
  return (
    <>
      <img src={coverImg} alt="movie_img" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </>
  );
};
export default Movie;
