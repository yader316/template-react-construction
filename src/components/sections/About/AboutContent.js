import React from "react";
import { Link } from "react-router-dom";

import dbData from '../../data/db';

const imgUrl = require.context('../../../assets/img', true);


const AboutContent = () => {
    return (
        <section className="wcu-section section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="wcu-video wow fadeInLeft">
                            <div className="video-poster-one bg-img-c" style={{ backgroundImage: `url( '${imgUrl('./photos/photo.jpg')}')` }}>
                            </div>
                            <div className="video-poster-two bg-img-c" style={{ backgroundImage: `url( '${imgUrl('./photos/photo-2.jpg')}')` }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="wcu-text-two">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">{dbData.dbFrases[3].frase}</span>
                                <h2 className="title text-capitalize">a little about us</h2>
                            </div>
                            <p>
                                {dbData.dbAbout.description[0].paragraph}
                            </p>
                            {
                                dbData.dbAbout.description[0].list ?
                                    <ul className="wcu-list clearfix">
                                        {
                                            dbData.dbAbout.description[0].list.map((item, index) => (
                                                <li key={index}>
                                                    <i className="fas fa-check-circle" /> {item}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                    : null
                            }
                            <Link to="/contact" className="main-btn text-capitalize">free estimate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutContent;