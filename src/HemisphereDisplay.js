import React from 'react';
import northern from './image/Northern.webp'
import southern from './image/Southern.jpg'
import './Hemisphere.css'

const hemisphereConfig = {
    Northern:{
        text: 'It is northern hemisphere',
        picture: northern
    },
    Southern:{
        text: 'It is northern hemisphere',
        picture: southern
    }
}

const HemisphereDisplay =({ latitude }) => {

    const hemisphere = latitude >0 ? 'Northern':'Southern'
    const {text, picture} = hemisphereConfig[hemisphere]
    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment' >
                <div className='image'>
                <img src={picture} alt='Hemisphere' />
                </div>
                <div className='ui teal bottom attached label'>
                    <h1> {text} </h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay