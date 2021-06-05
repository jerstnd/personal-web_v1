import React, { useEffect } from 'react';
import './Box.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Box = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const dataBox = {
        title : 'Lorem Ipsum',
        decs : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    };

    return(
        <div className='box-container' data-aos='fade-right'>
            <div className='box'>
                <h3>{dataBox.title}</h3>
                <p>{dataBox.decs}</p>
            </div>
            <div className='box'>
                <h3>{dataBox.title}</h3>
                <p>{dataBox.decs}</p>
            </div>
            <div className='box'>
                <h3>{dataBox.title}</h3>
                <p>{dataBox.decs}</p>
            </div>
        </div>
    );
}

export default Box;