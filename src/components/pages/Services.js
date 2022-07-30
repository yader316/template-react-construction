import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import CardServices from '../sections/servicetwo/CardServices';


import dbData from '../data/db';

const Servicetwo = () => {

    return (
        <Fragment>
            <MetaTags>
                <title>{dbData.dbPrincipal.name}| Services</title>
                <meta
                    name={dbData.dbFrases[0].frase}
                    content={dbData.dbHome[0].paragraph}
                />
            </MetaTags>
            <Header />
            <Breadcrumbs pagename='Services' bgImage='photos/photo-2.jpg' />
            <Container style={{marginBottom:'100px'}}>
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50 mt-50">
                    <span className="title-tag">{dbData.dbFrases[0].frase}</span>
                    <h2 className="title text-capitalize">our services</h2>
                </div>
                {/* Services Boxes */}
                <CardServices />
            </Container>
            <Footer />
        </Fragment>
    );
}


export default Servicetwo;