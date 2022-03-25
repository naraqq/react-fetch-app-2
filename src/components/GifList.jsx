import React from 'react';
import Gif from './Gif';

function GifList(props) {

    let result = props.data;
    let gifs = result.map(e => (
        <Gif url={e.images.fixed_height.url} key={e.id}/>
    ))
    return ( 
        <ul className='gif-list'>
            {gifs}
        </ul>
     );
}

export default GifList;