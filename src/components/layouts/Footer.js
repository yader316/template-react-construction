import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import shape1 from '../../assets/img/lines/01.png'
import shape2 from '../../assets/img/lines/02.png'

import dbData from '../data/db';

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const imgUrl = require.context('../../assets/img', true);


const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-widget">
                    <div className="row">
                        <div className="col-lg-8 col-sm-7 order-1">
                            <div className="widget site-info-widget">
                                <div className="footer-logo d-sm-block d-md-none text-center ">
                                    <img src={imgUrl('./logowh.png')} alt="" />
                                </div>
                                <h4 className="widget-title">About</h4>
                                <p>
                                    {
                                        dbData.dbAbout.description[0].paragraph.substring(0, 218)
                                    }
                                </p>
                                <ul className="social-links">
                                    {
                                        dbData.dbSocialMedia.redes.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={item.url} target="_blank">
                                                        <i className={item.icon}></i>
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-5 order-2">
                            <div className="widget newsletter-widget">
                                <h4 className="widget-title">Call Us Now!</h4>
                                <div className="newsletter-form">
                                    <a href={`tel:+1${dbData.dbPrincipal.phones[0].phone}`}>
                                        <button className="main-btn">
                                            <i class="fa fa-phone"></i>
                                            <span className='px-3'>{dbData.dbPrincipal.phones[0].phone}</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 order-3">
                            <div className="widget nav-widget">
                                <h4 className="widget-title">Navigation</h4>
                                <ul>
                                    {
                                        dbData.dbMenu.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={item.link}>
                                                        <i class="far fa-chevron-right"></i>
                                                        <i class="fa-regular fa-helmet-safety"></i>
                                                        <span className='px-3'>{item.name}</span>
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-7 order-lg-4 order-5">
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="widget nav-widget">
                                        <h4 className="widget-title">Services</h4>
                                        <ul>
                                            {
                                                dbData.dbServices.slice(0, 6).map((item, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link to='/services'>{item.name}</Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-sm-6">
                                    <div className="widget contact-widget">
                                        <h4 className="widget-title">Contact Us</h4>
                                        <ul className="contact-infos">
                                            <Row>
                                                {
                                                    dbData.dbPrincipal.phones.map((item, index) => {
                                                        return (
                                                            <Col key={index} sm={12} md={6} className='pb-4'>
                                                                <a href={`tel:+1${item.phone}`}>                                                                <i className="far fa-phone" />
                                                                    <span className='px-3'>{item.phone}</span>
                                                                </a>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                                <Col sm={12} md={6} className='pb-4'>
                                                    <a href='#map'>
                                                        <i className="far fa-map-marker-alt" />
                                                        <span className='px-3'>{dbData.dbPrincipal.addresses[0].address}</span>
                                                    </a>
                                                </Col>
                                                <Col sm={12} md={6} className='pb-4'>
                                                    <i className="far fa-calendar"></i>
                                                    <span>{dbData.dbPrincipal.workdays[0].day}</span>
                                                </Col>
                                            </Row>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 order-lg-4 order-4">
                            <div className="widget insta-feed-widget">
                                <div className="footer-logo d-sm-none d-md-block text-center ">
                                    <img src={imgUrl('./logowh.png')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <p className="copyright-text">
                        <span>Copy@ <Link to="/">{dbData.dbPrincipal.name}</Link>. Website -2022</span>
                        <span>All Right Reserved Design By {dbData.dbPrincipal.name}</span>
                    </p>
                    <Link to="#" className="back-to-top" onClick={scrollToTop}><i className="far fa-angle-up" /></Link>
                </div>
            </div>
            {/* Lines */}
            <img src={shape1} alt="line" className="line-one" />
            <img src={shape2} alt="line" className="line-two" />
        </footer>
    );
}


export default Footer;