import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Workingprocess from '../hometwo/Workingprocess'
import About from './About'
import Banner from './Banner'
import CounterBlack from '../../layouts/ConuterBlack'
import Project from './Project'
import Service from './Service'
import HeroImage from '../../layouts/HeroImages'
import AboutContent from '../../sections/About/AboutContent'

import dbData from '../../data/db'


class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <About />
                <Service />
                <Workingprocess />
                <CounterBlack />
                <HeroImage />
                <Container>
                    <AboutContent />
                </Container>
                <Project />
                <Container>
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
                </Container>
                <div className="mt-50 " >
                    <iframe className='mapContent' title="map" src={dbData.dbPrincipal.addresses[0].url} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
            </Fragment>
        );
    }
}

export default Content;