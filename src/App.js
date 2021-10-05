import React ,{useState} from 'react';
import './App.css';
import MovieList from './Component/MovieList';
import MovieListHeading from './Component/MovieListHeading';
import SearchBox from './Component/SearchBox';
import SearchBoxRate from './Component/SearchBoxRate';
import MovieData from './Component/MovieData';
import StarRating from './Component/StarRating';
import AddMovie from './Component/AddMovie';

const App = () => {
let [searchValue, setSearchValue] = useState('');
let [searchValueRate, setSearchValueRate] = useState(0);
let [rating, setRating] = useState(0);
let [hover, setHover] = useState(0);
let [movies, setMovies] = useState(MovieData);


const getVisibileData = ({movies}) => {
{ 
  return movies.filter(
    movie =>
    ((rating >= 0 && rating <= movie.IMDBRating) &&  (searchValueRate >= 0 && searchValueRate <= movie.IMDBRating)) && movie.Title
        .toLowerCase()
        .includes(searchValue.toLowerCase().trim())
  );
  }
}
return (
   <> 
    
     <header>
     <SearchBox searchValue ={searchValue}  setSearchValue={setSearchValue} />
     <SearchBoxRate searchValueRate ={searchValueRate}  setSearchValueRate={setSearchValueRate} rating ={rating} setRating={setRating} hover={hover} setHover={setHover} />
     <StarRating searchValueRate ={searchValueRate} rating ={rating}  setRating={setRating} hover={hover} setHover={setHover}/>
     </header >
     <MovieListHeading heading='Movie Card'/>
      <div className="movie-container">
       <MovieList
	            movies={getVisibileData({movies})} setMovies={setMovies} />
       </div>
       
     <AddMovie movies= {movies} setMovies={setMovies}/>
    </>
  );
};
export default App;
