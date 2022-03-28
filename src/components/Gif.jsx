import React from 'react';

function Gif(props) {
    return ( 
        <li className='gif-wrap'>
            <img alt='randomImg' src={props.url}></img>
        </li>
     );
}

export default Gif;