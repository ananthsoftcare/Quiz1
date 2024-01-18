


import React from 'react'
import './rating.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';



export default function Rating(props: any) {

    return (
        <div className='star2'>
            <input id="star1"  className="star" type="checkbox"  onClick={props.onclick} /><br /><br />
        </div>
    )
}



