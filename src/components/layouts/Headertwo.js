import React, { Fragment } from 'react';
import NavHelper from '../../helper/NavHelper';
import { Link } from 'react-router-dom';
import Navmenu from './Navmenu';

import dbData from '../data/db';

const imgUrl = require.context('../../assets/img', true);



class Headertwo extends NavHelper {
    render() {
        const mobileactive = this.state.matches ? 'breakpoint-on' : '';
        const smallmobileactive = this.state.matches ? 'd-none' : '';
        const stickyheader = this.state.stickyheader ? 'sticky-on' : '';
        return (
            <Fragment>
                <header className={`header-two sticky-header ${stickyheader}`}>
                    {/* Header Topbar */}
                    <div className="header-topbar">
                        <div className="container-fluid container-1600">
                            <div className="header-topbar-inner d-md-flex align-items-center justify-content-between">
                                {/* Contact Info */}
                                <ul className="contact-info">
                                    <li>
                                        <a href={`tel:+1${dbData.dbPrincipal.phones[0].phone}`}>
                                            <i class="far fa-phone"></i>
                                            {dbData.dbPrincipal.phones[0].phone}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={`mailto:${dbData.dbPrincipal.emails[0].email}`}>
                                            <i className="far fa-envelope-open" />
                                            {dbData.dbPrincipal.emails[0].email}
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#map'>
                                            <i className="far fa-map-marker-alt" />
                                            {dbData.dbPrincipal.addresses[0].address}
                                        </a>
                                    </li>
                                </ul>
                                {/* Social Links */}
                                <ul className="social-links">
                                    {
                                        dbData.dbSocialMedia.redes.map((item, index) => {
                                            return (
                                                <li key={index}>
                                                    <a href={item.url} target="_blank">
                                                        <i className={item.icon} />
                                                    </a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Header Menu  */}
                    <div className="header-nav sticky-nav">
                        <div className="container-fluid container-1600">
                            <div className={`nav-container ${mobileactive}`}>
                                {/* Site Logo */}
                                <div className="site-logo py-1">
                                    <Link to="/hometwo">
                                        <img src={imgUrl('./logowh.png')} alt="Logo" style={ stickyheader ? {width:'100px'} : {width:'180px'}} />
                                    </Link>
                                </div>
                                {/* Main Menu */}
                                <div className={this.state.togglemethod === true ? 'nav-menu d-lg-flex align-items-center menu-on' : 'nav-menu d-lg-flex align-items-center'}>
                                    {/* Navbar Close Icon */}
                                    <div className="navbar-close" onClick={this.toggleClass}>
                                        <div className="cross-wrap"><span /><span /></div>
                                    </div>
                                    {/* Mneu Items */}
                                    <div className="menu-items">
                                        <Navmenu />
                                    </div>
                                    {/* Pushed Item */}
                                    <div className="nav-pushed-item" />
                                </div>
                                {/* Navbar Extra  */}
                                <div className="navbar-extra d-lg-block d-flex align-items-center">
                                    {/* Navbtn */}
                                    <div className={`navbar-btn nav-push-item ${smallmobileactive}`}>
                                        <Link to="/contact" className="main-btn main-btn-3 text-capitalize">free estimate</Link>
                                    </div>
                                    {/* Navbar Toggler */}
                                    <div className={this.togglemethod === true ? 'navbar-toggler active' : 'navbar-toggler'} onClick={this.toggleClass}>
                                        <span /><span /><span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className={this.state.classmethod === true ? 'offcanvas-wrapper show-offcanvas' : 'offcanvas-wrapper'}>
                    <div className={this.state.classmethod === true ? 'offcanvas-overly show-overly' : 'offcanvas-overly'} onClick={this.canvasToggle} />
                    <div className="offcanvas-widget">
                        <Link to="#" className="offcanvas-close" onClick={this.canvasToggle} ><i className="fal fa-times" /></Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Headertwo;