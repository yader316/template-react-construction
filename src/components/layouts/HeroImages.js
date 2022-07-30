import React from 'react'
import { Link } from 'react-router-dom';

import dbData from '../data/db';


const imgUrl = require.context('../../assets/img', true);


function HeroImages(props) {


    return (
        <section className="video-section-two bg-img-c" style={{ backgroundImage: `url(${imgUrl('./photos/photo-6.jpg')})` }}>
            <div className="container">
                <div className="row align-content-center justify-content-center">
                    <div className="col-lg-10">
                        <div className="video-cont text-center">
                            <h2>
                                {dbData.dbFrases[3].frase}
                            </h2>
                            <p style={{color:'white', padding:'20px 0'}}>
                                {dbData.dbAbout.description[1].paragraph}
                            </p>
                            <Link to="/contact" className="main-btn text-capitalize">free estimate</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-shape-one">
                <img src={imgUrl('./lines/12.png')} alt="" />
            </div>
            <div className="line-shape-two">
                <img src={imgUrl('./lines/11.png')} alt="" />
            </div>

        </section>
    );
}
export default HeroImages;