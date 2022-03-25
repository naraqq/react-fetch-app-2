import React from 'react';

function Gif(props) {
    return ( 
        <li className='gif-wrap'>
            <img src={props.url}></img>
        </li>
     );
}

export default Gif;