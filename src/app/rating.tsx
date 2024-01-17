


import React from 'react'
import  './rating.css';



export default function Rating (props:any){
  



    return(
   <div>
  {/* <input id="star1" className="star" type="checkbox" title="bookmark page"/> */}
  {/* <label  title="Amazing">First star</label> */}
  <input id="star1" className="star" type="checkbox" title="bookmark page"  onClick={props.onclick} /><br/><br/>
</div>
    )
}