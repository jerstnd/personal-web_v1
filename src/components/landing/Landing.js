import React from 'react';
import './Landing.scss';
import Astronaut from '../../assets/Astronaut.png'
import Button from '@material-ui/core/Button';


const Landing = () => {
    return(
        <div className='landing'>
            <div className='landing-text'>
                <h1>Hello World.</h1>
                <p>Hi my name is Jeremy</p>
                <Button variant="outlined" color="primary" disableElevation>Portfolio</Button>
            </div>
            <div className='landing-img'>
                <img src={Astronaut} width='580' height='520'></img>
            </div>
        </div>
    );
}

export default Landing;