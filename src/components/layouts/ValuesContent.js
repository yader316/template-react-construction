import React from 'react'
import { Link } from 'react-router-dom'

import line1 from '../../assets/img/lines/11.png'
import line2 from '../../assets/img/lines/12.png'

import dbData from '../data/db';


const imgUrl = require.context('../../assets/img', true);

const serviceblock = [
    { icon: `${imgUrl('./icons/02.png')}`, title: `${dbData.dbValues[0].title}`, text: `${dbData.dbValues[0].description}` },
    { icon: `${imgUrl('./icons/04.png')}`, title: `${dbData.dbValues[1].title}`, text: `${dbData.dbValues[1].description}` },
    { icon: `${imgUrl('./icons/01.png')}`, title: `${dbData.dbValues[2].title}`, text: `${dbData.dbValues[2].description}` },
]


function ValuesContent(props) {

    return (
        <section className="service-section grey-bg service-line-shape section-gap">
            <div className="w-60 mx-auto">
                {/* Section Title */}
                <div className="section-title text-center both-border mb-50">
                    <span className="title-tag">{dbData.dbFrases[4].frase}</span>
                    <h2 className="title" style={{padding:'0 20%'}}>{dbData.dbFrases[2].frase}</h2>
                </div>
                {/* Services Boxes */}
                <div className="row service-boxes justify-content-center">
                    {serviceblock.map((item, i) => (
                        <div key={i} className="col-lg-3 col-sm-6 col-10 wow fadeInRight" data-wow-duration="1500ms" data-wow-delay="700ms">
                            <div className="service-box-three border-0">
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                                <h3><Link to="/servicedetail">{item.title}</Link></h3>
                                <p>{item.text}</p>
                                <Link to="/servicedetail" className="service-link">
                                    <i className="fal fa-long-arrow-right" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
export default ValuesContent;