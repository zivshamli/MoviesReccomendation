import "../css/Favorites.css";
import{ useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const { favorites } = useMovieContext();
    if (favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorite Movies</h2>
                    <div className="movies-grid">
                        {favorites.map((movie) => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorite Movies Yet</h2>
            <p>Start adding movies to your favorites list!</p>
            <p>Click on the ❤️ button on any movie card to add it to your favorites.</p>
            <p>Once you add a movie, it will appear here.</p>
        </div>
    );
}

export default Favorites;
