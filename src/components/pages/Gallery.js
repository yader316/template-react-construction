import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/portfolio/Content'

import dbData from '../data/db';
import { Container } from 'react-bootstrap';


const Gallery = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>{dbData.dbPrincipal.name} | Gallery</title>
                <meta
                    name={dbData.dbFrases[0].frase}
                    content={dbData.dbHome[0].paragraph}
                />
            </MetaTags>
            <Header />
            <Breadcrumbs pagename='Gallery' bgImage='photos/photo-1.jpg' />
            <Container>
                <Content />
            </Container>
            <Footer />
        </Fragment>
    )
}

export default Gallery;


