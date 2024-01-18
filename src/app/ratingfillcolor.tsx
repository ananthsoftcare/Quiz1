


import React from 'react'
import './ratingfillcolor.css';
import StarBorderIcon from '@mui/icons-material/StarBorder';



export default function RatingColor(props: any) {

    return (
        <div className='star2'>
            <input id="star1"  className="starrating" type="checkbox"  onClick={props.onclick} /><br /><br />
        </div>
    )
}



