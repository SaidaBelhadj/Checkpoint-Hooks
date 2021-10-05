import React from "react";
const setRateClass =(rate)=>
{};     
	
export default function MovieCard({ movie }) {
return (
<div className='movie-container'>
<div className= 'movie'> 
<div className= 'movie-img'>
<img src ={movie.Poster} alt = 'movie' style= {{width:300 , height:450}}></img>
</div> 
   <div className= 'movie-info'><span> {movie.Title}</span>
   
   <br/> <span className={setRateClass(movie.Rate)}>  {movie.Rate}</span>
   </div>
   <div className='movie-over'><h3> <span>Description :</span></h3><p> {movie.Description}</p></div>
  
   
   
   </div>
   </div>
   	  );
}
         