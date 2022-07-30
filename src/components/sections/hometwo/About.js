import React from 'react'
import { Link } from 'react-router-dom'



import dbData from '../../data/db';
import { Col, Row } from 'react-bootstrap'


const imgUrl = require.context('../../../assets/img', true);

function About(props) {


    return (
        <section className="about-section section-gap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="about-video">
                            <div className="video-poster-one wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="400ms" style={{ backgroundColor: '#FF4A17' }}>
                            </div>
                            <div className="video-poster-two wow fadeInUp" style={{ backgroundImage: `url('${imgUrl('./photos/photo-2.jpg')}')` }}>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="about-text-two">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">{dbData.dbFrases[4].frase}</span>
                                <h2 className="title">
                                    {
                                        <div>
                                            {

                                                dbData.dbPrincipal.licensed ?
                                                    <div>
                                                        <span className="text-capitalize">we are licensed</span>
                                                        <span className="text-capitalize">
                                                            {dbData.dbPrincipal.licensed}
                                                        </span>
                                                    </div>
                                                    :
                                                    <span className="text-capitalize">
                                                        {
                                                            "we have " + dbData.dbPrincipal.exprYears + ' years of experience'
                                                        }
                                                    </span>
                                            }
                                        </div>
                                    }
                                </h2>
                            </div>
                            <p>
                                {dbData.dbHome[0].paragraph}
                            </p>
                            <ul className="about-list">
                            <Row>
                                {
                                    dbData.dbServices.slice(0,6).map((item, index) => {
                                        return (
                                            <Col key={index} sm={12} md={6}>
                                            <li key={index}>
                                                <i className="fas fa-check" />
                                                <span>{item.name}</span>
                                            </li>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            </ul>
                            <Link to="/contact" className="main-btn text-capitalize">fre estimate</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;