import React, { useEffect } from 'react';
import './Box.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Box = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return(
        <div className='box-container' data-aos='fade-right'>
            <div className='box'>

            </div>
            <div className='box'>
                
            </div>
            <div className='box'>
            
            </div>
        </div>
    );
}

export default Box;