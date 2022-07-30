import React, { Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/contact/Content'

import dbData from '../data/db';


const Contact = () => {
    return(
        <Fragment>
                <MetaTags>
                    <title>{dbData.dbPrincipal.name} | Contact Us</title>
                    <meta
                        name={dbData.dbFrases[0].frase}
                        content={dbData.dbHome[0].paragraph}
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs pagename='Contact' bgImage='photos/photo.jpg' />
                <Content />
                <Footer />
            </Fragment>
    )
}

export default Contact;