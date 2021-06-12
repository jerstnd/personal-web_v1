import React, { useEffect } from 'react';
import './Box.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Box = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const dataBox = {
        title : 'Web Developer',
        desc : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        title2 : 'AI Developer',
        desc2 : '',
        title3 : 'Blockchain Developer',
        desc3 : '',
    };

    return(
        <div className='box-container' data-aos='fade-right'>
            <div className='box'>
                <h3>{dataBox.title}</h3>
                <p>{dataBox.desc}</p>
            </div>
            <div className='box'>
                <h3>{dataBox.title2}</h3>
                <p>{dataBox.desc}</p>
            </div>
            <div className='box'>
                <h3>{dataBox.title3}</h3>
                <p>{dataBox.desc}</p>
            </div>
        </div>
    );
}

export default Box;