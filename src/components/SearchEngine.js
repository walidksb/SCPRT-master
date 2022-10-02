import React from 'react'
import { ProjectCard } from "./ProjectCard";

 export default function SearchEngine () {

     
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <div className="search-engine">
      <div className='filters'>

      </div>
      <div className='conainer'>
        <div  
          className='search-barre'
          style={style} 
        >
          {/* <label for="search"><b>Explore</b></label> */}
          <input type='text'
           placeholder='Search'
           style={{width: 500, 
            height: 50, 
            marginLeft:20,
            marginRight:20, 
            borderRadius:5,
             // add some padding to the placeholder
            paddingLeft: 10,
            border:"1px solid #ccc",
            }}
           />
          <button type='submit' 
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",

          }}>
              Search </button>
        </div>

        <div className='search-result'>

        </div>
        {/* <div className='categories-cards'>
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
          <ProjectCard /> 
        </div> */}

      </div>
      
    </div>
  )
}





