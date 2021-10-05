import React from 'react'

const SearchBoxRate = (props) => {
    
    console.log(" SearchBoxRate props.value",props.searchValueRate);

   return (
       
        <div  style ={{paddingRight:50}}>
            <input className= "search" 
           type="search"
           onChange= {
            (event)=>(props.setSearchValueRate(event.target.value)  ,props.setRating(0) ,props.setHover(props.rating))}
         placeholder= "Search by Rate...">
          </input>    
        </div>
        
    );
    
};
export default SearchBoxRate;
