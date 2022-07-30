import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';

import dbData from '../../data/db';

const imgUrl = require.context('../../../assets/img', true);


class Content extends Component {
    render() {

        return (
            <section className="contact-section contact-page section-gap-top">
                <div className="container">
                    <div className="contact-info">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="illustration-img text-center">
                                    <img src={imgUrl(`./photos/photo-3.jpg`)} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                                <div className="contact-info-content">
                                    <div className="section-title left-border mb-40">
                                        <span className="title-tag">Get In Touch</span>
                                        <h2 className="title">{dbData.dbFrases[3].frase}</h2>
                                    </div>
                                    <p>
                                        {dbData.dbAbout.description[1].paragraph}
                                    </p>
                                    <ul>
                                        <li className="phone">
                                            <Row>
                                                {
                                                    dbData.dbPrincipal.phones.map((items, index) => {
                                                        return (
                                                            <Col sm={12} md={6} key={index} className='pb-3'>
                                                                <a href={`tel:1${items.phone}`} >
                                                                    <i className="fa fa-phone" />
                                                                    <span>{items.phone}</span>
                                                                </a>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                                <Col sm={12} md={6} >
                                                    <a href='#map'>
                                                        <i className="far fa-map-marker-alt" />
                                                        <span>{dbData.dbPrincipal.addresses[0].address}</span>
                                                    </a>
                                                </Col>
                                                <Col sm={12} md={6} >
                                                    <i className="far fa-calendar"></i>
                                                    <span>{dbData.dbPrincipal.workdays[0].day}</span>
                                                    <p>{dbData.dbPrincipal.workHours[0].hour}</p>
                                                </Col>
                                            </Row>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form grey-bg">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-10">
                                <div className="section-title text-center mb-40">
                                    <h2 className="title">Don’t Hesited To Contact Us</h2>
                                </div>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Full Name" />
                                                <span className="icon"><i className="far fa-user-circle" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="email" placeholder="Your Email Address" />
                                                <span className="icon"><i className="far fa-envelope-open" /></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="input-group mb-30">
                                                <input type="text" placeholder="Your Phone" />
                                                <span className="icon"><i className="far fa-phone" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group textarea mb-30">
                                                <textarea placeholder="Write Message" defaultValue={""} />
                                                <span className="icon"><i className="far fa-pencil" /></span>
                                            </div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="main-btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-1600">
                    <div className="contact-map">
                        <iframe title="map" src={dbData.dbPrincipal.addresses[0].url} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;