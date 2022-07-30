import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Headertwo'
import Footer from '../layouts/Footer'
import Content from '../sections/hometwo/Content'

import dbData from '../data/db';


class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>{dbData.dbPrincipal.name} | Home</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Home;