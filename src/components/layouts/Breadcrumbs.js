import React from 'react';
import { Link } from 'react-router-dom'

const imgUrl = require.context('../../assets/img', true);


const Breadcrumbs = ({ pagename, bgImage }) => {
    return (
        <section className="breadcrumb-section bg-img-c" style={{
            backgroundImage: `url('${
                imgUrl(`./${
                    bgImage ? bgImage : 'banner/01.jpg'
                    }`)
                }')`
            }}>
            <div className="container">
                <div className="breadcrumb-text">
                    <h1 className="page-title">{pagename}</h1>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li>{pagename}</li> 
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-shapes">
                <div className="one" />
                <div className="two" />
                <div className="three" />
            </div>
        </section>
    )
}

export default Breadcrumbs;