import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import MetaTags from 'react-meta-tags'
// import Header from '../layouts/Header'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import AboutContent from '../sections/About/AboutContent'
import ConuterBlack from '../layouts/ConuterBlack';
import HeroImages from '../layouts/HeroImages';
import ValuesContent from '../layouts/ValuesContent';


import dbData from '../data/db';


class About extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>{dbData.dbPrincipal.name} | About Us</title>
                    <meta
                        name={dbData.dbFrases[0].frase}
                        content={dbData.dbHome[0].paragraph}
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs pagename='About Us' bgImage='photos/photo-5.jpg' />
                <Container>
                    <AboutContent />
                    <ConuterBlack />
                </Container>
                <HeroImages />
                <ValuesContent />
                <Footer />
            </Fragment>
        );
    }
}

export default About;